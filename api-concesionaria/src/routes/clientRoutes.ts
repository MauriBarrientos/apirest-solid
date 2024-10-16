import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { ClientRepository } from '../repositories/client/ClientRepository';
import { ClientService } from '../services/ClientService';

const router = Router();

// Crear instancias necesarias
const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

// Rutas para clientes
router.post('/clients', (req, res) => clientController.createClient(req, res));
router.get('/clients/:id', (req, res) => clientController.getClientById(req, res));
router.put('/clients/:id', (req, res) => clientController.updateClient(req, res));
router.delete('/clients/:id', (req, res) => clientController.deleteClient(req, res));

export default router;
