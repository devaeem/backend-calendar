const express = require('express')
const router = express.Router();
const { CreateEvent ,ListEvent } = require('../controllers/fullcalendar')



//@Endpoint localhost:5000/api/event
//@Method   post
//@Acess    Public

router.post('/event',CreateEvent)

//@Endpoint localhost:5000/api/event
//@Method   get
//@Acess    Public

router.get('/event',ListEvent)








module.exports = router;