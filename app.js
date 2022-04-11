const express= require('express');
const path= require('path');

const app= express();

const public= path.resolve(__dirname, './public');
const views= path.resolve(__dirname, './views');

// console.clear();
// console.log(public);
// console.log(views);

app.use(express.static(public));


app.listen(8000, ()=> {
    console.log('Se inicio el servidor en el puerto 8000')
});

app.get('/', (req, res) => {
    res.status(200).sendFile(views + '/home.html');
})
app.get('/register', (req, res) => {
    res.status(200).sendFile(views + '/register.html');
})



