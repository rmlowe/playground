const https = require('https')
const url = 'https://api.darksky.net/forecast/8f3ff6b6422c0856551f0f6c09ca507b/40,-75'

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()