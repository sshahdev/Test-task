const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const { mongoose }= require('../db/mongoose');
const { Street }= require('../models/street');
const { House }= require('../models/house');

app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("node server started at port 3000");
});

app.post('/api/addStreet', async(req, res)=>{
    var street= new Street(req.body);
    var result= await street.save();
    res.send(result);
});
app.post('/api/addHouse', async(req, res)=>{
    var data={
        street: req.body.streetName,
        name: req.body.name,
        houseNo: req.body.houseNo,
        window: {
            windowWidth: req.body.windowWidth,
            windowHeight: req.body.windowHeight,
            windowSize: req.body.windowSize
        },
        door: {
            doorWidth: req.body.doorWidth,
            doorHeight: req.body.doorHeight,
            doorSize: req.body.doorSize,
            sideOfHouse: req.body.sideOfHouse
        }

    };
    var house= new House(data);
    var result= await house.save();
    res.send(result);
});


app.get('/api/getStreets',async(req,res)=>{
    res.send(await Street.find());
});
app.get('/api/getHouses',async(req,res)=>{
    res.send(await House.find());
});

app.post('/api/getStreet',async(req,res)=>{
    res.send(await Street.findOne(req.body));
});
app.post('/api/getHouse',async(req,res)=>{
    res.send(await House.findOne(req.body));
});

app.patch('/api/updateStreet',async(req,res)=>{
    var streetId= req.body._id;
    var data= req.body.data;
    var result= await Street.updateOne({_id: streetId},{$set: data});
    res.send(result);
});
app.patch('/api/updateHouse',async(req,res)=>{
    var houseId= req.body._id;
    var housedata= req.body.data;
    var data={
        street: housedata.streetName,
        name: housedata.name,
        houseNo: housedata.houseNo,
        window: {
            windowWidth: housedata.windowWidth,
            windowHeight: housedata.windowHeight,
            windowSize: housedata.windowSize
        },
        door: {
            doorWidth: housedata.doorWidth,
            doorHeight: housedata.doorHeight,
            doorSize: housedata.doorSize,
            sideOfHouse: housedata.sideOfHouse
        }

    };
    var result= await House.updateOne({_id: houseId},{$set: data});
    res.send(result);
});

app.post('/api/deleteStreet',async(req,res)=>{
    var result= await Street.deleteOne(req.body);
    res.send(result);
});
app.post('/api/deleteHouse',async(req,res)=>{
    var result= await House.deleteOne(req.body);
    res.send(result);
});
