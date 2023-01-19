import React, {Component} from "react";

class ShakeBall extends Component {
  static defaultProps = {
  answers: [" ", "one", "two", "three", "four", "five", "six"],
  thinking: ["asking the cosmos", "hmmmm...", "listening to the spirits", "thinking"]
  }
  constructor(props) {
    super(props)
    this.state = {face:" ", thinking:null, shaking:false}
    this.shake = this.shake.bind(this)
  }
  shake () {
    const newAns = this.props.answers[Math.floor(Math.random()* this.props.answers.length)]

    const newThink = this.props.thinking[Math.floor(Math.random()* this.props.thinking.length)]

    this.setState({face:newAns, thinking:newThink, shaking:true})

    setTimeout (() => {
      this.setState({shaking:false})
    }, 1000)
  }
  render () {
    return (
      <div className="eight-ball">
        <div className="answer">
          <p className="text">
            {this.state.face}
          </p>
        </div>
        <button onClick={this.shake}>{this.state.shaking? `${this.state.thinking}` : 'shake me'}</button>
      </div>
    )
  }
}

export default ShakeBall