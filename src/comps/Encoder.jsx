import React, { Component} from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

export default class Encoder extends Component {

  render() {
    return (
      <div className="App">
        <input id="encText" type="text" placeholder="encode"></input>
        <Button id="encBtn" title="encode text" onPress={encode}></Button>
        <p id="encRes"></p>
      </div>
    )
  }
}
function encode(){
    var enc=en($("#encText").val())
    fetch("https://securitypassword.cyclic.app/encode/?enc="+enc, {method : 'GET',})
    .then(function(response) {
       return response.json(); })
      .then(function(json) {
        $("#encRes").text(de(json.data))
        console.log(de(de(json.data))+" : "+de(json.data))
      });
}