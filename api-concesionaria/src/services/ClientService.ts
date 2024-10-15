import { IClient } from '../models/IClient';
import { IClientRepository } from '../repositories/client/IClientRepository';

export class ClientService {
    constructor(private clientRepository: IClientRepository) {}

    async createClient(client: IClient): Promise<IClient> {
        return this.clientRepository.create(client);
    }

    async getClientById(id: string): Promise<IClient | null> {
        return this.clientRepository.findById(id);
    }

    async updateClient(id: string, client: IClient): Promise<IClient> {
        return this.clientRepository.update(id, client);
    }

    async deleteClient(id: string): Promise<void> {
        await this.clientRepository.delete(id);
    }
}
