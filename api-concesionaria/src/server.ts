import express, { Application } from 'express';
import vehicleRoutes from './routes/vehicleRoutes';
import clientRoutes from './routes/clientRoutes';

class Server {
    private app: Application;
    private port: number;

    constructor(port: number = 3000) { // Usamos un valor por defecto para el puerto
        this.app = express();
        this.port = port;
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.json());
        // Puedes agregar otros middlewares si los necesitas
    }

    private routes(): void {
        // Usamos las rutas importadas para vehículos y clientes
        this.app.use('/api', vehicleRoutes);
        this.app.use('/api', clientRoutes);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

// Creamos una instancia del servidor y lo iniciamos
const server = new Server();
server.start();
