import { IVehicle } from '../models/IVehicle';
import { IVehicleRepository } from '../repositories/vehicle/IVehicleRepository';

export class VehicleService {
    constructor(private vehicleRepository: IVehicleRepository) {}

    async createVehicle(vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleRepository.create(vehicle);
    }

    async getVehicleById(id: string): Promise<IVehicle | null> {
        return this.vehicleRepository.findById(id);
    }

    async updateVehicle(id: string, vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleRepository.update(id, vehicle);
    }

    async deleteVehicle(id: string): Promise<void> {
        await this.vehicleRepository.delete(id);
    }
}
