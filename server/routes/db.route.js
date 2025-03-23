import express from 'express';
import NodeCache from 'node-cache';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const cache = new NodeCache({ stdTTL: 300, checkperiod: 120 });
const __dirname = path.resolve();

async function getPokemonData() {
    const cacheKey = `pokemon-all`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        return cachedData;
    }

    try {
        const filePath = path.join(__dirname, 'data', '../../models/MergedOpt.json');
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        cache.set(cacheKey, jsonData.pokemon);
        return jsonData.pokemon;

    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        throw new Error(`Failed to fetch Pokemon: ${error.message}`);
    }
}

router.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

router.get('/pokemon', async (req, res) => {
    try {
        const pokemonData = await getPokemonData();
        res.json(pokemonData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;