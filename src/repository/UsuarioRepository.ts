import { PrismaClient } from "@prisma/client";
import { Usuario } from '../types/Usuario';

const prisma = new PrismaClient();

class UsuarioRepository {
    async createUsuario(usuario: Usuario) {
        return await prisma.usuario.create({
            data: {
                nome: usuario.nome,
                idade: usuario.idade,
                nota_primeiro_semestre: usuario.nota_primeiro_semestre,
                nota_segundo_semestre: usuario.nota_segundo_semestre,
                nome_professor: usuario.nome_professor,
                numero_da_sala: usuario.numero_da_sala
            }
        });
    }

    async getAllUsuarios() {
        return await prisma.usuario.findMany();
    }

    async getUsuarioById(id: string) {
        return await prisma.usuario.findUnique({
            where: {
                id: id,
            }
        })
    }

    async updateUsuarioById(id: string, novoUsuario: Usuario) {
        return await prisma.usuario.update({
            where: {
                id,
            },
            data: novoUsuario
        });
    }

    async deleteUsuarioById(id: string) {
        return await prisma.usuario.delete({
            where: {
                id
            }
        })
    }
}

export { UsuarioRepository };
