import { Usuario } from '../types/Usuario';
import { UsuarioRepository } from '../repository/UsuarioRepository';

class UsuarioService {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async createUsuario(usuario: Usuario): Promise<Usuario | null> {
        try {
            const novoUsuario: Usuario | null = await this.usuarioRepository.createUsuario(usuario);
            return novoUsuario;
        } catch (error) {
            return null;
        }
    }

    async getUsuarios(): Promise<Usuario[] | null> {
        try {
            const usuarios = await this.usuarioRepository.getAllUsuarios();
            return usuarios;
        } catch (error) {
            return null;
        }
    }

    async getUsuarioById(id: string): Promise<Usuario | null> {
        try {
            const usuario = await this.usuarioRepository.getUsuarioById(id);
            return usuario;
        } catch (error) {
            return null;
        }
    }

    async updateUsuarioById(id: string, novoUsuario: Usuario): Promise<Usuario | null> {
        try {
            const updatedUsuario = await this.usuarioRepository.updateUsuarioById(id, novoUsuario);
            return updatedUsuario;
        } catch (error) {
            return null;
        }
    }

    async deleteUsuarioById(id: string): Promise<Usuario | null> {
        try {
            const deletedUsuario = await this.usuarioRepository.deleteUsuarioById(id);
            return deletedUsuario;
        } catch (error) {
            return null;
        }
    }
}

export { UsuarioService };
