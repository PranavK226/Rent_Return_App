const express = require('express')
const app = express()
const port = 3000

app.use(express.static('Public'));

app.get('/sampleObjects', (req, res) => {
    res.json([{'ObjectName':"Lime Scooter", "PostedBy":"Chris Ragnow", "Price":"$10/day", "TotalPrice":"$100", "Description":"A scooter", "Status":true}, 
        {'ObjectName':"Chainsaw", "PostedBy":"Blobbo Jignesh", "Price":"$15/day", "Description":"A chainsaw", "TotalPrice":"$150", "Status":false},
        {'ObjectName':"Antique Table Lamp", "PostedBy":"That Kid", "Price":"$5/day", "Description":"An antique lamp (easy to break)", "TotalPrice":"$50", "Status":true}])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})