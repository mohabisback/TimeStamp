import express from 'express'
const data = [{original_url:"https://google.com", short_url:40}]
const router = express.Router()
router.route('/').post(async (req, res, next)=>{
  try {
    const url = req.body.url
    const urlRegex = /^(http|https)(:\/\/)/;
    if (!urlRegex.test(url)) {return res.json({ error: 'invalid url' })}
    const original_url = new URL(url)
    const obj = data.find((obj)=> obj.original_url === original_url)
    if (obj) {
      res.send(obj)
    } else {
      const short_url = data.length + 1
      data.push({original_url, short_url})
      res.send({original_url, short_url})
    }
  } catch (error) {
    res.status(403).send({ error: 'invalid url' })
  }
})
router.route('/:shorturl').get(async (req, res, next)=>{
  try {
    const short_url = req.params.shorturl
    const obj = data.find((obj)=> obj.short_url === Number(short_url))
    return res.redirect(obj.original_url)
  } catch (error) {
    res.status(403).send({error:"No short URL found for the given input"})
  }

})



export default router