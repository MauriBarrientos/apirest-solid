import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';
import { IClient } from '../models/IClient';

export class ClientController {
    constructor(private clientService: ClientService) {}

    async createClient(req: Request, res: Response): Promise<void> {
        try {
            const client: IClient = req.body;
            const createdClient = await this.clientService.createClient(client);
            res.status(201).json(createdClient);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getClientById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const client = await this.clientService.getClientById(id);
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ message: 'Client not found' });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async updateClient(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const client: IClient = req.body;
            const updatedClient = await this.clientService.updateClient(id, client);
            res.status(200).json(updatedClient);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async deleteClient(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            await this.clientService.deleteClient(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}
