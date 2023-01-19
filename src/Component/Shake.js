import React, {Component} from "react";

class ShakeBall extends Component {
  static defaultProps = {
  answers: [" ", "one", "two", "three", "four", "five", "six"],
  toughLove: ["banana", "sandwich", "tacos"],
  thinking: ["asking the cosmos", "hmmmm...", "listening to the spirits", "thinking"]
  }

  constructor(props) {
    super(props)
    this.state = {face:" ", thinking:null, classic:true, tough:false, shaking:false, option:1}
    this.shake = this.shake.bind(this)
    this.switch = this.switch.bind (this)
  }
  shake () {
    // if (this.state.classic) { 
    //   newAns =  this.props.answers[Math.floor(Math.random()* this.props.answers.length)]
    // } else {
    //   newAns =  this.props.toughLove[Math.floor(Math.random()* this.props.toughLove.length)]
    // }

    const newAns = this.state.classic? this.props.answers[Math.floor(Math.random()* this.props.answers.length)] : this.props.toughLove[Math.floor(Math.random()* this.props.toughLove.length)]

    const newThink = this.props.thinking[Math.floor(Math.random()* this.props.thinking.length)]

    this.setState({face:newAns, thinking:newThink, shaking:true})
    
    setTimeout (() => {
      this.setState({shaking:false})
    }, 1000)
  }
  
  switch () {
    this.state.classic? this.setState({ classic:false}) : this.setState ({classic:true})
  }
  
  render () {
    return (
      <div className="eight-ball">
        <button onClick={this.switch}>{this.state.classic? `Get some Tough Love` : 'Classic Answers'}</button>
        <div className="answer">
          <p className="text">
            {this.state.face}
          </p>
        </div>
        <button onClick={this.shake}>{this.state.shaking? `${this.state.thinking}` : 'shake me'}</button>
        <br/>
      </div>
    )
  }
}

export default ShakeBall