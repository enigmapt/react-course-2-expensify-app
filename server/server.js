//express para production server

const path = require('path')
const express  = require('express'); //import using node
const app = express(); //express aplication
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //heroku dynamic port or using 3000 if doesn't exist


app.use(express.static(publicPath));

// historyApiFallback: true, but in node
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); 

//port 3000 of locahost
// app.listen(3000, () => {
//     console.log('Server is up!')
// })

app.listen(port, () => {
    console.log('Server is up!')
});