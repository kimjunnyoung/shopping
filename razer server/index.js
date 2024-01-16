const express = require("express");
const session = require('express-session');
const cors = require("cors");
const models = require('./models');
const productRouter = require('./routes/productRoutes');
const registerRouter = require('./routes/registerRoutes');
const loginRouter = require('./routes/loginRoutes');
// const searchRouter = require('./routes/searchRoutes');
const cartRouter = require('./routes/cartRoutes');
const app = express();
const port = 3001;
const multer = require("multer");
const upload = multer({ 
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'upload/')
        },
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    })
});

app.use(cors());
app.use(express.json());
app.use("/upload", express.static("upload"));
app.post('/image', upload.single('image'), (req, res)=>{
    const file = req.file;
    console.log(file);
    res.send({
        imageUrl: "http://localhost:3001/"+file.destination+file.filename
    });
});

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
  }));

app.use('/products', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
// app.use('/search', searchRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
    console.log('쇼핑몰 서버가 동작중입니다.');
    models.sequelize
        .sync()
        .then(() => {
            console.log('DB연결 성공');
        })
        .catch(e => {
            console.error(e);
            console.log('DB연결 에러');
            process.exit();
        });
});

