import { IClient } from '../../models/IClient';

export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    findById(id: string): Promise<IClient | null>;
    update(id: string, client: IClient): Promise<IClient>;
    delete(id: string): Promise<void>;
}
