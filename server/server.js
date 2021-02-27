//express para production server

const path = require('path')
const express  = require('express'); //import using node
const app = express();
const publicPath = path.join(__dirname, '..', 'public');


app.use(express.static(publicPath));

// historyApiFallback: true, but in node
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); 

app.listen(3000, () => {
    console.log('Server is up!')
})