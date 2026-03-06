const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');


//Route to get all users
router.get('/enrollments',userController.getAllUsers);
router.get('/enrollments/:id',userController.getUserById);
router.post('/enrollments',userController.createUser);
router.put('/enrollments',userController.updateUser);
router.delete('/enrollments',userController.deleteUser);
module.exports=router;