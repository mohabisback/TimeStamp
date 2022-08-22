import express from 'express'
const router = express.Router()

router.route('/').get(async (req, res, next)=>{
  try {
    let date = new Date()
    let str = date.toString()
    let format = str.slice(0,3) + ', '+ str.slice(8,10) + ' ' + str.slice(4,7) + ' ' + str.slice(11, 28)
    res.status(200).json({unix: date.getTime(), utc: format})
  } catch (error) {
    console.log(error)
  }
})

router.route('/:date').get(async (req, res, next)=>{
  try {
    let dateParam = req.params.date
    let date = new Date(Number(dateParam))
    let str = date.toUTCString();
    console.log(str)

    if (date.getTime()){
      res.status(200).json({unix: date.getTime(), utc: str})
    } else {
      res.status(404).json({error: 'Invalid Date'}) 
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({error: 'Invalid Date'})
  }
})




export default router