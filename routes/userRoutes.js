
import express from 'express';
import {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} from '../controllers/userControllers.js';


const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser)
    .patch(updateUser).delete(deleteUser);

export default router;