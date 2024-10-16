import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { IVehicleRepository } from '../repositories/vehicle/IVehicleRepository';
import { DiscountedVehicleService } from '../services/DiscountedVehicleService';

const router = Router();

const vehicleRepository = new VehicleRepository();
const discountedVehicleService = new DiscountedVehicleService(vehicleRepository);
const vehicleController = new VehicleController(discountedVehicleService);

// Rutas para vehículos
router.post('/vehicles', (req, res) => vehicleController.createVehicle(req, res));
router.get('/vehicles/:id', (req, res) => vehicleController.getVehicleById(req, res));
router.put('/vehicles/:id', (req, res) => vehicleController.updateVehicle(req, res));
router.delete('/vehicles/:id', (req, res) => vehicleController.deleteVehicle(req, res));
router.post('/vehicles/discount', (req, res) => vehicleController.applyDiscount(req, res));

export default router;
