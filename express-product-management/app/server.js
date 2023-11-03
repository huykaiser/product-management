const express = require('express');
const router = require('../app/router/root.router');
const cors = require('cors');

const { sequelize } = require('./model/index');

const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`listening on port at http://localhost:${port}`);
});

// set up sequelize
sequelize.sync({ alter: true });

const checkConnect = async () => {
    try{
        await sequelize.authenticate();
        console.log("Successfully connected!!!");
    }catch(error){
        console.log("Unsuccessfully connected!!!");
    }
};

checkConnect();

