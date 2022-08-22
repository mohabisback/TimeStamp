import express from 'express'
import cors from 'cors'
import datesRouter from './api/datesRouter.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', datesRouter)
app.use('*', (req, res)=>res.status(404).json({error: 'not found'}))

app.listen(5000,  ()=>{ console.log('server listening on port: 5000')})
