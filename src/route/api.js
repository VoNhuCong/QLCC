import express from "express";
import APIController from '../controller/APIController';

let router = express.Router();

const initAPIRoute = (app) => {

    router.get('/phone-number/:id', APIController.getPhoneNumber)
    router.get('/members', APIController.getAllMembers);
    router.get('/apartments', APIController.getAllApartments);
    router.get('/cars', APIController.getAllCars);

    // working for member
    router.get('/members', APIController.getAllMembers)
    router.get('/member', APIController.getMember);
    router.post('/member', APIController.createMember);
    router.put('/member', APIController.updateMember);
    router.delete('/member', APIController.deleteMember);

    // working for apartment
    router.get('/all-apartments', APIController.getAllApartments);
    router.get('/apartment', APIController.getApartment);
    router.post('/apartment', APIController.createApartment);
    router.put('/apartment', APIController.updateApartment);
    router.delete('/apartment', APIController.deleteApartment);

    // working for cars
    router.get('/all-cars', APIController.getAllCars);
    router.get('/car', APIController.getCar);
    router.post('/car', APIController.createCar);
    router.put('/car', APIController.updateCar);
    router.delete('/car', APIController.deleteCar);

    // working for family
    router.get('/all-familys', APIController.getAllFamilys)
    router.get('/family', APIController.getFamily);
    router.post('/family', APIController.createFamily);
    router.put('/family', APIController.updateFamily);
    router.delete('/family', APIController.deleteFamily);

    // working for phone-number
    router.get('/all-phone-numbers', APIController.getAllPhoneNumber)
    router.get('/phone-number', APIController.getPhoneNumber);
    router.post('/phone-number', APIController.createPhoneNumber);
    router.put('/phone-number', APIController.updatePhoneNumber);
    router.delete('/phone-number', APIController.deletePhoneNumber);

    return app.use('/api/v1/', router)
}


export default initAPIRoute;
