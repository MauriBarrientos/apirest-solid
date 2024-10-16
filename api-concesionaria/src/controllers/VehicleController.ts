import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService';
import { DiscountedVehicleService } from '../services/DiscountedVehicleService';
import { IVehicle } from '../models/IVehicle';

export class VehicleController {
    constructor(
        private vehicleService: VehicleService,
        private discountedVehicleService: DiscountedVehicleService
    ) {}

    async createVehicle(req: Request, res: Response): Promise<void> {
        try {
            const vehicle: IVehicle = req.body;
            const createdVehicle = await this.vehicleService.createVehicle(vehicle);
            res.status(201).json(createdVehicle);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getVehicleById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const vehicle = await this.vehicleService.getVehicleById(id);
            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json({ message: 'Vehicle not found' });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async updateVehicle(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const vehicle: IVehicle = req.body;
            const updatedVehicle = await this.vehicleService.updateVehicle(id, vehicle);
            res.status(200).json(updatedVehicle);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async deleteVehicle(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            await this.vehicleService.deleteVehicle(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async applyDiscount(req: Request, res: Response): Promise<void> {
        try {
            const { vehicleId, discountPercentage } = req.body;
            const updatedVehicle = await this.discountedVehicleService.applyDiscount(vehicleId, discountPercentage);
            if (updatedVehicle) {
                res.status(200).json(updatedVehicle);
            } else {
                res.status(404).json({ message: 'Vehicle not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred' });
            }
        }
    }
}