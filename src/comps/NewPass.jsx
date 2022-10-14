import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
import RandomPass from './RandomPass';
import $ from 'jquery'
import {en,de} from "./sec"

export default class NewPass extends Component {



    render() {
      return (
        <div className="NewPass">
          <RandomPass></RandomPass>
          <input type="text" id="newPassName" placeholder='name'></input> 
          <Button title="save" onPress={savePass}></Button>
        </div>
      )
    }
  }
  function savePass(){
    var usu_id=$("#logId").text()
    var pass=$("#genPass").val()
    var name=$("#newPassName").val()
    if(pass!=""&&usu_id!=""){
      usu_id=usu_id.substring(1,usu_id.length)
      usu_id=parseInt(usu_id)
      console.log(pass+" "+name)
      pass=en(pass)
      name=en(name)
      fetch("https://securitypassword.cyclic.app/savePass/?usu_id="+usu_id+"&pass="+pass+"&name="+name, {method : 'GET',})
      .then(function(response) {
        return response.json(); })
        .then(function(json) {
          if(json.data!=""){
            console.log(de(json.data))
          }
      })
    }
  }