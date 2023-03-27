const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'qwerty@123',
    database: 'demo'
});


// post request
app.post('/create', (req, res) => {
    const product = req.body.product;
    const description = req.body.description;
    const location = req.body.location;
    const quntity_in_kg = req.body.quntity_in_kg;
    const price_per_kg = req.body.price_per_kg;

    db.query(
        "INSERT INTO product (product, description, location, quntity_in_kg, price_per_kg) VALUES (?,?,?,?,?)",
        [product,description,location,quntity_in_kg,price_per_kg],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );

});

// get request
app.get('/product', (req, res) => {
    db.query("SELECT * FROM product", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
});





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});