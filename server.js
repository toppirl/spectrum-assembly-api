const express = require('express')
const app = express()
const PORT = 8000

const data = {
  'john doe': {
    email: 'john.doe@example.com',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '90210',
    },
  },
  'jane smith': {
    email: 'jane.smith@example.com',
    age: 25,
    address: {
      street: '456 Elm St',
      city: 'Somewhere',
      state: 'NY',
      zip: '12345',
    },
  },
  'Unknown User': {
    email: 'unknown@example.com',
    age: null,
    address: {
      street: 'Unknown Street',
      city: 'Unknown City',
      state: 'US',
      zip: '00000',
    },
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:userName', (req, res) => {
  const usersName = req.params.userName.toLowerCase()
  if (data[usersName]) {
    res.json(data[usersName])
  } else {
    res.json(data['Unknown User'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
