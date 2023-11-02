import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";
import { Usuario } from "../types/Usuario";
import { z } from 'zod';

class UsuarioController {
    private usuarioService: UsuarioService;

    constructor(usuarioService: UsuarioService) {
        this.usuarioService = usuarioService;
    }

    async createUsuario(request: Request, response: Response) {
        try {
            const createUsuarioSchema = z.object({
                id: z.string().optional(),
                nome: z.string(),
                idade: z.number(),
                nota_primeiro_semestre: z.number(),
                nota_segundo_semestre: z.number(),
                nome_professor: z.string(),
                numero_da_sala: z.string(),
            });
            
            const usuario: Usuario = createUsuarioSchema.parse(request.body);

            const novoUsuario = await this.usuarioService.createUsuario(usuario);
            return response.status(201).json(novoUsuario);
        } catch (error) {
            return response.status(500).json({ success: false, message: "Erro interno do servidor" });
        }
    }

    async getUsuarios(request:Request, response: Response) {
        try {
            const usuarios = await this.usuarioService.getUsuarios();

            if (usuarios) {
                response.status(200).json(usuarios);
            } else {
                response.status(400).json({success: false,message: "Erro ao encontrar usuários"});
            }
        } catch (error) {
            response.status(500).json({ success: false, message: "Erro no servidor" });
        }
    }

    async getUsuarioById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const usuario = await this.usuarioService.getUsuarioById(id);

            if (usuario) {
                response.status(200).json( usuario );
            } else {
                response.status(404).json({success: false, message: "Usuário não encontrado" });
            }
        } catch (error) {
            response.status(500).json({ success: false, message: "Erro id inválido" });
        }
    }

    async updateUsuarioById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const createUsuarioSchema = z.object({
                nome: z.string(),
                idade: z.number(),
                nota_primeiro_semestre: z.number(),
                nota_segundo_semestre: z.number(),
                nome_professor: z.string(),
                numero_da_sala: z.string(),
            });

            const usuario: Usuario = createUsuarioSchema.parse(request.body);
            const usuarioAtualizado =
                await this.usuarioService.updateUsuarioById(id, usuario);

            if (usuarioAtualizado) {
                response.status(200).json(usuarioAtualizado);
            } else {
                response.status(400).json({success: false,message: "Erro ao atualizar usuário" });
            }
        } catch (error) {
            console.error("Erro ao atualizar usuario");
            response.status(500).json({ success: false, message: "Erro do servidor" });
        }
    }

    async deleteUsuarioById(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const usuarioDeletado = await this.usuarioService.deleteUsuarioById(id);

            if (usuarioDeletado) {
                response.status(200).json({success: true,message: "Usuário deletado com sucesso",});
            } else {
                response.status(400).json({success: false,message: "Erro ao deletar usuário"});
            }
        } catch (error) {;
            response.status(500).json({ success: false, message: "Erro ao deletar usuário" });
        }
    }
}

export { UsuarioController };
