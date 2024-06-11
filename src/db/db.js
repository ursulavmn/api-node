const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/adc-api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(() => {
  console.log('mongo conectado')
}).catch(err => {
  console.log(err)
})


module.exports = mongoose