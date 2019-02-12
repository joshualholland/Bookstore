import { Router } from 'express';
import DB from '../../db';

let router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if(id) {
        try {
            let user = await DB.Users.getUser(id);
            res.send(user);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            let users = await DB.Users.getUsers();
            res.send(users);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
})

export default router;