import express from 'express'

const router = express.Router()
router.route('/:date').get(async (req, res, next)=>{
  try {
    console.log('i got here')
    let dateStr = req.params.date
    let date = new Date(dateStr)
    if (date.getTime()){
      res.status(200).json({unix: date.getTime(), utc: date.toString()})
    } else {
      res.status(404).json({error: 'not found'})
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({error: 'not found'})
  }
})




export default router