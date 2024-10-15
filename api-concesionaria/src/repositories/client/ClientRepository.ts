import { IClient } from '../../models/IClient';
import { IClientRepository } from './IClientRepository';

export class ClientRepository implements IClientRepository {
    private clients: IClient[] = [];

    async create(client: IClient): Promise<IClient> {
        this.clients.push(client);
        return client;
    }

    async findById(id: string): Promise<IClient | null> {
        const client = this.clients.find(c => c.id === id);
        return client || null;
    }

    async update(id: string, client: IClient): Promise<IClient> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) {
            this.clients[index] = client;
            return client;
        }
        throw new Error(`Client with id ${id} not found`);
    }

    async delete(id: string): Promise<void> {
        this.clients = this.clients.filter(c => c.id !== id);
    }
}
