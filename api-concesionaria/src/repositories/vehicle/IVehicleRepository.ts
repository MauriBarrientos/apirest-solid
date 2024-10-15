// src/repositories/vehicle/IVehicleRepository.ts
import { IVehicle } from '../../models/IVehicle';

export interface IVehicleRepository {
    create(vehicle: IVehicle): Promise<IVehicle>;
    findById(id: string): Promise<IVehicle | null>;
    update(id: string, vehicle: IVehicle): Promise<IVehicle>;
    delete(id: string): Promise<void>;
}
