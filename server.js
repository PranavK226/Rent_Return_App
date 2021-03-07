const express = require('express')
const app = express()
const port = 3000

app.use(express.static('Public'));

app.get('/sampleObjects', (req, res) => {
    res.json([{'ObjectName':"Lime Scooter", "PostedBy":"Chris Ragnow", "Price":"$10/day", "Status":true}, 
        {'ObjectName':"Chainsaw", "PostedBy":"Blobbo Jignesh", "Price":"$15/day", "Status":false},
        {'ObjectName':"Antique Table Lamp", "PostedBy":"That Kid", "Price":"$5/day", "Status":true}])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})