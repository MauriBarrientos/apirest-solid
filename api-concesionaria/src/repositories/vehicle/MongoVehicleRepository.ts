import { IVehicle } from '../../models/IVehicle';
import { IVehicleRepository } from './IVehicleRepository';

export class MongoVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = [];

    async create(vehicle: IVehicle): Promise<IVehicle> {
        this.vehicles.push(vehicle);
        return vehicle;
    }

    async findById(id: string): Promise<IVehicle | null> {
        const vehicle = this.vehicles.find(v => v.id === id);
        return vehicle || null;
    }

    async update(id: string, vehicle: IVehicle): Promise<IVehicle> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index !== -1) {
            this.vehicles[index] = vehicle;
            return vehicle;
        }
        throw new Error(`Vehicle with id ${id} not found`);
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(v => v.id !== id);
    }
}
