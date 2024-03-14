const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const Imovel = require('./models/imovel');
const cors = require('cors')
const List = require('./routes/api/Catalog')

const app = express();
const PORT = process.env.PORT || 3100;
const MONGOURI = process.env.CONNECTION_STRING;

app.use(express.json());
app.use(cors())

mongoose
    .connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/catalog', List)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
