const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

const hotels = require('./data/hotels.json')

app.get('/', (req, res) =>{
    res.send('Hotel API Running');
    
})

app.get('/location', (req, res)=>{
    res.send(categories)
})

app.get('/hotels', (req, res)=>{
    res.send(hotels)
})
app.get('/booking-form/:id', (req, res)=>{
    const id = req.params.id;
    
    const getHotel = hotels.filter((p)=> p.category_id == id);
    
    res.send(getHotel)
})



app.listen(port, ()=>{
    console.log('Hotel Server Running', port);
})