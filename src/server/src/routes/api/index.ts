import { Router } from 'express';
import * as passport from 'passport';

import bookRouter from './bookRouter';
import categoriesRouter from './categoriesRouter';
import userRouter from './userRouter';

let router = Router();

router.use('/books', bookRouter);
router.use('/categories', categoriesRouter);

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/users', userRouter);

export default router;