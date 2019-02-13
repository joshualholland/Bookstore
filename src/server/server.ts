import * as path from 'path';
import * as express from 'express';
import * as passport from 'passport';
import routes from './src/routes';

import './src/middleware/localStrategy';
import './src/middleware/bearerStrategy';

const app = express();

let p = path.join(__dirname, '../public');
console.log(p);

app.use(express.static(p));
app.use(express.json());
app.use(passport.initialize());
app.use(routes);

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
