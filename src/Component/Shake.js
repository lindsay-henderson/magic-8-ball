import React, {Component} from "react";
import { Button } from "@mui/material";
import { choice } from "./helpers";
import './Ball.css'

class ShakeBall extends Component {
  static defaultProps = {
  answers: ["yes", "no", "it is\n \certain", "doubtful", "try\nagain later", "definitely"],
  toughLove: ["ask\nyour mother", "wow\nthat's embarrassing", "you\nneed\na nap", "seriously?", "just\ndo it\nalready", "terrible\nidea", "you're asking\nme?", "stop \nmaking\nexcuses"],
  thinking: ["asking the cosmos", "hmmmm...", "listening to the spirits", "thinking"]
  }

  constructor(props) {
    super(props)
    this.state = {
      face:" ", 
      thinking:null, 
      classic:true, 
      tough:false, 
      shaking:false,
      opacity: 1  
    }

    this.shake = this.shake.bind(this)
    this.switch = this.switch.bind (this)
  }

  shake () {
    let newAns
    do { 
      newAns = this.state.classic? choice(this.props.answers) : choice(this.props.toughLove)
    }
    while     
    (newAns === this.state.tough)
    this.setState({tough:newAns})
    while 
    (newAns === this.state.classic)
    this.setState({classic:newAns})
    
    const newThink = choice(this.props.thinking)

    this.setState({face:newAns, thinking:newThink, shaking:true})
    
    setTimeout(() => {
      this.setState({shaking:false})
    }, 1000)
  }
  
  switch () {
    this.state.classic? this.setState({ classic:false }): this.setState ({classic:true})
    this.setState({ face: null, shaking:false })
  }

  render () {
    return (
      <div className="eight-ball">
        <section id= 'button-box'>
          <Button variant="contained" size ="large" color="primary" id='button' onClick={this.shake} disabled={this.state.shaking}>{this.state.shaking? `${this.state.thinking}` : 'shake me'}</Button>
        </section>
        <div className= {this.state.face === ' '? 'hide' : 'answer'} id = {this.state.shaking? 'wiggle' : ''}>
          <p className= {this.state.face === ' '? 'hide' : 'text'} id = {this.state.shaking? 'fade' : ''}>
            <p>
            {this.state.face}
            </p>
          </p>
        </div>
        <br/>
        <Button variant="contained" id='button' color="primary"  size = "large" onClick={this.switch}>{this.state.classic? `Get some Tough Love` : 'Classic Answers'}</Button>
      </div>
    )}
}


export default ShakeBall