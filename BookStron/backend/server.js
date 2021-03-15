import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute';


dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);

// เอา list ทั้งหมดของ products
app.get('/api/products', (req, res) => {
  res.send(data.products);
})

// เอา list ทั้งหมดของ products
app.get("/api/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if(product)
    res.send(product);
  else
    res.status(404),send({ msg:"Product Not Found."})
});

// เริ่มเปิด server ที่ port 5000
app.listen(5000, () => {
  console.log('starting server แล้วครับ');
  console.log('เริ่มใช้งาน');
});
