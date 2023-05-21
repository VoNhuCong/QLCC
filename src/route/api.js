import express from "express";
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers); // method GET -> READ data
    router.post('/create-user', APIController.createNewUser); // method POST -> CREATE data
    router.put('/update-user', APIController.updateUser); //method PUT -> UPDATE data
    router.delete('/delete-user/:id', APIController.deleteUser); //method DELETE -> DELETE data

    router.post('/create-new-member', APIController.createNewMember);

    router.get('/phone-number/:id', APIController.getPhoneNumber)
    router.get('/members', APIController.getAllMembers);
    router.get('/family', APIController.getAllFamily);
    router.get('/apartments', APIController.getAllApartments);
    router.get('/cars', APIController.getAllCars);

    return app.use('/api/v1/', router)
}


export default initAPIRoute;
