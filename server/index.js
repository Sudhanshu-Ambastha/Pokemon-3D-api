import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
import ipfilter from 'express-ipfilter';

import router from './routes/db.route.js';

const app = express();
dotenv.config();
const port = process.env.PORT;

const cache = new NodeCache({ stdTTL: 300, checkperiod: 120 });

let blacklist = [];

app.use(cors());

app.set('trust proxy', true);

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests, please try again after 1 minute.',
});

app.use(ipfilter.IpFilter(blacklist, { mode: 'deny' }));

app.use('/v1/', limiter);

app.use('/v1', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
    res.send(`
        Welcome to the Pokemon3D API!\n
        See the docs at https://documenter.getpostman.com/view/29725199/2sAYX8KMU8 for available endpoints.\n
        To see the available 3D models, visit the https://sudhanshu-ambastha.github.io/Pokemon-3D-api/.\n
        else proceed to the /v1/pokemon endpoint to get the list of all pokemon.
    `);
});

app.post('/admin/blacklist', express.json(), (req, res) => {
    const { ip, action } = req.body;

    if (!ip || !action || (action !== 'add' && action !== 'remove')) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    if (action === 'add') {
        if (!blacklist.includes(ip)) {
            blacklist.push(ip);
        }
    } else if (action === 'remove') {
        blacklist = blacklist.filter((blacklistedIp) => blacklistedIp !== ip);
    }

    res.json({ message: `IP ${ip} ${action}ed to blacklist` });
});

app.get('/admin/blacklist', (req, res) => {
    res.json({ blacklist });
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});