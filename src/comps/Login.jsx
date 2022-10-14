import React, { Component, startTransition, useState} from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

export default class Login extends Component {

  render() {
    return (
      <div className="App">
        
        <input type="text" id="logUser" />
        <br id="br1"></br>
        <input type="text" id="logPass" />
        <br id="br2"></br>
        <Button id="logBtn" title="log" onPress={log}></Button>
        <p id="logTxt"></p>
      </div>
    )
  }
}
function log(){
  var usu=en($("#logUser").val())
  var pass=en($("#logPass").val())
  fetch("https://securitypassword.cyclic.app/login/?user="+usu+"&pass="+pass, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      if(json.data!=""){
        $("#logId").text(json.data)
        $("#login").attr("usu_id",json.data)
        $("#logTxt").text("logeo bien")
      }else{
       $("#logTxt").text("usu o pass bien`t")
       $("#logId").text("")
      }
      console.log(json.data)
    });
  }
