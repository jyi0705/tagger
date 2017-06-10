// your code here
// ES6 imports/exports are supported in this webpack setup.
import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import App from './app'

// const userData = () => {
//   return axios.get('/jyi1991')
//   .then(function (response) {
//     console.log('clicked')
//     console.log(response)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })
// }

render(
    <App/>,
    document.getElementById('app')
  );
