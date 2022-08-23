import path from 'path';
const __dirname = path.resolve();
import express from 'express'
import cors from 'cors'
import datesRouter from './api/datesRouter.js'
import shortUrl from './api/shortUrl.js'


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false})) //new built-in body-parser
app.use(express.json());

app.use('/api/shorturl', shortUrl)
app.use('/api', datesRouter)

app.listen(5000,  ()=>{ console.log('server listening on port: 5000')})
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
})