const express = require('express')
const app = express()
const port = 3000
const data = [{'id':1, 'ObjectName':"Lime Scooter", "PostedBy":"Chris Ragnow", "Price":"$10/day", "TotalPrice":"$100", "Age": "1 Year", "Description":"A scooter", "Status":true}, 
{'id':2, 'ObjectName':"Chainsaw", "PostedBy":"Blobbo Jignesh", "Price":"$15/day", "Description":"A chainsaw", "Age":"3 Years", "TotalPrice":"$150", "Status":false},
{'id':3, 'ObjectName':"Antique Table Lamp", "PostedBy":"That Kid", "Price":"$5/day", "Description":"An antique lamp (easy to break)", "Age":"10 years", "TotalPrice":"$50", "Status":true}]

app.use(express.static('Public'));

app.get('/sampleObjects', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})