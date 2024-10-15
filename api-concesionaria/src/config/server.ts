import express, { Application } from 'express';

export class Server {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        // Aquí se añadirán las rutas de los controladores en el futuro
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor ejecutándose en el puerto ${this.port}`);
        });
    }
}
