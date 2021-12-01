const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    });
});

app.post('/tshirt/:id', (req, res) => {
    const { id } =req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: 'Logo, please!'});
    }

    res.send({tshirt: `👕 with your ${logo} and ID = ${id}`});
});