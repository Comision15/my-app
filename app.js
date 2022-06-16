const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('HOLA MUNDO!!'))
app.get('/salida', (req,res) => res.send('CHAUUUU!!'))


app.listen(3030, () => console.log('Server running in port 3030'))