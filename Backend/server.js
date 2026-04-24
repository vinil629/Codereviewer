
require('dotenv').config()
const app=require('./src/app')
// const express=require('express')

// const path = require('path');
// app.use(express.static(path.join(__dirname, '../Frontend/build')));
// app.get('/:splat(*)', (req, res) => {
//   res.sendFile(path.join(__dirname, '../Frontend/build', 'index.html'));
// });






app.listen(4000,()=>{

    console.log("server is running on http://localhost:4000")

})