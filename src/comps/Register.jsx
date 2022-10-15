import React, { Component, startTransition, useState } from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

export default class Register extends Component {
  render() {
    return (
      <div className="App">
        
        <input type="text" id="regUser" />
        <br id="br1"></br>
        <input type="text" id="regPass" />
        <br id="br2"></br>
        <Button id="regBtn" title="register" onPress={reg}></Button>
        <p id="regTxt"></p>
      </div>
    )
  }
}
function reg(){
  var usu=en($("#regUser").val())
  var pass=en($("#regPass").val())
  fetch("https://sainos-dem-api-crud-almita.cyclic.app/register/?user="+usu+"&pass="+pass, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      $("#regTxt").text(de(json.data))
      console.log(de(json.msg))
    });
  }
