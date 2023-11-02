import express from 'express';
import { UsuarioService } from './services/UsuarioService';
import { UsuarioController } from './controllers/UsuarioController';
import { UsuarioRepository } from './repository/UsuarioRepository';

const router = express.Router();
const usuarioRepository = new UsuarioRepository();
const usuarioService = new UsuarioService(usuarioRepository);
const usuarioController = new UsuarioController(usuarioService);

router.get('/usuarios', (request, response) => usuarioController.getUsuarios(request, response));
router.post('/usuarios', (request, response) => usuarioController.createUsuario(request, response));
router.get('/usuarios/:id', (request, response) => usuarioController.getUsuarioById(request, response));
router.put('/usuarios/:id', (request, response) => usuarioController.updateUsuarioById(request, response));
router.delete('/usuarios/:id', (request, response) => usuarioController.deleteUsuarioById(request, response));

export default router;
