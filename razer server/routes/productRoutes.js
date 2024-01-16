const express = require('express');
const router = express.Router();
const { Product } = require('../models');

router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/audio', async (req, res) => {
    try {
        const audioProducts = await Product.findAll({
            where: {
                category: 'audio'
            }
        });
        res.json(audioProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/clothes', async (req, res) => {
    try {
        const clothesProducts = await Product.findAll({
            where: {
                category: 'clothes'
            }
        });
        res.json(clothesProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/console', async (req, res) => {
    try {
        const consoleProducts = await Product.findAll({
            where: {
                category: 'console'
            }
        });
        res.json(consoleProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/gear', async (req, res) => {
    try {
        const gearProducts = await Product.findAll({
            where: {
                category: 'gear'
            }
        });
        res.json(gearProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/mouse', async (req, res) => {
    try {
        const mouseProducts = await Product.findAll({
            where: {
                category: 'mouse'
            }
        });
        res.json(mouseProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/keyboard', async (req, res) => {
    try {
        const keyboardProducts = await Product.findAll({
            where: {
                category: 'keyboard'
            }
        });
        res.json(keyboardProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({
            where: {
                id
            }
        });
        if (!product) {
            res.status(404).json({ error: 'not found' });
            return;
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.post('/', async (req, res) => {
    const { name, price, seller, imageUrl, description, mainDescription, category, subCategory } = req.body;
    try {
        const product = await Product.create({
            name,
            price,
            seller,
            imageUrl,
            description,
            mainDescription,
            category,
            subCategory,
        });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({ where: { id } });
        res.json({ message: 'success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, seller, description, category, subCategory } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            res.status(404).json({ error: 'not found' });
            return;
        }
        await product.update({
            name,
            price,
            seller,
            description,
            category,
            subCategory,
        });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

module.exports = router;
