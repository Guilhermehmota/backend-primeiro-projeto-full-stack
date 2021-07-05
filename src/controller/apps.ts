import express from "express"
import dotenv from "dotenv"
import {AddressInfo} from "net"


dotenv.config();

export const app = express()

const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Falha ao rodar o servidor`);
    }
});
