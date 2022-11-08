import express from 'express'
import path from 'path'

const PORT = 3000;

const __dirname = path.resolve();

const app = express();

const publicDir = path.join(__dirname, 'public');
console.log(publicDir);
console.log(__dirname);

app.use('/', express.static(publicDir));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

//app.get('/', (req))