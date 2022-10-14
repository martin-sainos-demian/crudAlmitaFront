import React, { Component} from 'react'
import {Button,Switch} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

var state = ""; 


state = {  
  low: false,
  up:false,
  n:false,
  num:false,
  char:false,
  rect:false
}; 

export default class RandomPass extends Component {
  state = {  
    low: false,
    up:false,
    n:false,
    num:false,
    char:false,
    rect:false
  };  

  render() {
    return (
      <div className="RandomPass">
        <Switch id={this.id+".low"} value={this.state.low}  
                  onValueChange ={(low)=>{this.setState({low})
                  state.low=low}}></Switch><label>low</label>

        <Switch id={this.id+".up"} value={this.state.up}  
                  onValueChange ={(up)=>{this.setState({up})
                  state.up=up}}></Switch><label>up</label>

        <Switch id={this.id+".n"} value={this.state.n}  
                  onValueChange ={(n)=>{this.setState({n})
                  state.n=n}}></Switch><label>ñ</label>

        <Switch id={this.id+".num"} value={this.state.num}  
                  onValueChange ={(num)=>{this.setState({num})
                  state.num=num}}></Switch><label>nums</label>

        <Switch id={this.id+".char"} value={this.state.char}  
                  onValueChange ={(char)=>{this.setState({char})
                  state.char=char}}></Switch><label>special chars</label>
                  <br></br>

        <Switch id={this.id+".rect"} value={this.state.rect}  
                  onValueChange ={(rect)=>{this.setState({rect})
                  state.rect=rect}}></Switch><label>rectangles :3</label>
                  <br></br>
        <input type="number" id="genNum" placeholder="length" ></input>
        <br></br>
        <Button title="generate" onPress={gen}></Button>
        <input type="text" id="genPass" placeholder='new pass'></input>
      </div>
    )
  }
}
function gen(){
  var len=$("#genNum").val()
  fetch("https://securitypassword.cyclic.app/generate/?low="+state.low.toString()
  +"&up="+state.up.toString()+"&n="+state.n.toString()+"&num="+state.num.toString()
  +"&char="+state.char.toString()+"&rect="+state.rect.toString()+"&len="+len, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      $("#genPass").val(de(json.data))
      console.log(de(json.data))
    });
}