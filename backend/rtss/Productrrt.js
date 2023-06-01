import express from "express";
import {
    getPustaka,
    getPustakaById,
    savePustaka,
    updatePustaka,
    deletePustaka
} from "../controller/Productctrl.js"



const routes = express.Router();

routes.get('/pustaka', getPustaka);
routes.get('/pustaka/id', getPustakaById);
routes.post('/pustaka', savePustaka);
routes.patch('/pustaka/:id', updatePustaka);
routes.delete('/pustaka/:id', deletePustaka);

export default routes