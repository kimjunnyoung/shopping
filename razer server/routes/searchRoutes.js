// const express = require('express');
// const router = express.Router();
// const models = require('../models');

// router.get('/', async (req, res) => {
//   const { searchTerm } = req.query;

//   try {
//     const products = await models.Product.findAll({
//       where: {
//         [models.Sequelize.Op.or]: [
//           { name: { [models.Sequelize.Op.like]: `%${searchTerm}%` } },
//           { description: { [models.Sequelize.Op.like]: `%${searchTerm}%` } }
//         ]
//       }
//     });

//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;
