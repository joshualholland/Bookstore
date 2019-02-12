import * as express from 'express';
import * as passport from 'passport';

import { createToken } from '../../utils/security/tokens';
import DB from '../../db';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req, res, next) => {
    try {
        let user = await DB.Users.findByEmail(req.body.email);
        let token = await createToken({ userid: user[0].id })
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id
        })
    } catch (e) { console.log(e) }
});

export default router;