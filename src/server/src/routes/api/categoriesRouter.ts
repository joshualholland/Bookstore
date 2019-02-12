import { Router } from 'express';
import DB from '../../db';

let router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if(id) {
        try {
            let category = await DB.Categories.getCategory(id);
            res.send(category);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            let categories = await DB.Categories.getCategories();
            res.send(categories);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
});


export default router;

