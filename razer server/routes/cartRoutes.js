const express = require('express');
const router = express.Router();
const { Product, CartItem } = require('../models');

router.post('/', async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: '상품을 찾을 수 없습니다.' });
        }
        const cartItem = await CartItem.create({
            name: product.name,
            price: product.price,
            quantity: 1
        });

        return res.status(201).json({ message: '상품이 장바구니에 추가되었습니다.', cartItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: '서버 에러' });
    }
});

router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.findAll();
        return res.status(200).json(cartItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: '서버 에러' });
    }
});

router.delete('/:cartItemId', async (req, res) => {
    const { cartItemId } = req.params;
    try {
        const cartItem = await CartItem.findByPk(cartItemId);
        if (!cartItem) {
            return res.status(404).json({ error: '아무것도 없습니다.' });
        }

        await cartItem.destroy();

        return res.status(200).json({ message: '등록되었습니다.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
});

router.put('/:cartItemId', async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    try {
        const cartItem = await CartItem.findByPk(cartItemId);
        if (!cartItem) {
            return res.status(404).json({ error: '아무것도 없습니다.' });
        }
        await cartItem.update({ quantity });

        return res.status(200).json({ message: '수량이 업데이트되었습니다.', cartItem });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
      const cartItems = await CartItem.findAll();
      return res.status(200).json(cartItems);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: '서버 에러' });
    }
  });
  
module.exports = router;
