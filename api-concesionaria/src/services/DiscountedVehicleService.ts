import { IVehicle } from '../models/IVehicle';
import { IVehicleRepository } from '../repositories/vehicle/IVehicleRepository';
import { VehicleService } from './VehicleService';

export class DiscountedVehicleService extends VehicleService {
    constructor(vehicleRepository: IVehicleRepository) {
        super(vehicleRepository);
    }

    applyDiscount(vehicleId: string, discountPercentage: number): Promise<IVehicle | null> {
        return new Promise(async (resolve, reject) => {
            try {
                const vehicle = await this.getVehicleById(vehicleId);
                if (vehicle) {
                    const discountAmount = vehicle.price * (discountPercentage / 100);
                    vehicle.price = vehicle.price - discountAmount;
                    const updatedVehicle = await this.vehicleRepository.update(vehicleId, vehicle);
                    resolve(updatedVehicle);
                } else {
                    resolve(null);
                }
            } catch (error) {
                reject(error);
            }
        });
    }
}
