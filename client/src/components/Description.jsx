import React from 'react';

class Description extends React.Component {
    constructor(props) {
        super(props);

        this.closedText = '+ Read More';
        this.openText = '- Read Less';

        this.state = {
          isHidden: true,
          currText: this.closedText
        };
    }

    switchButtons() {
      if (this.state.currText === this.closedText) {
        return this.openText;
      } else {
        return this.closedText;
      }
    }

    toggleDescription() {
      this.setState({
        isHidden: !this.state.isHidden,
        currText: this.switchButtons()
      });
    }


    render() {
      const isHidden = this.state.isHidden;
      let text = isHidden ? 
        <Text text={this.props.description.slice(0, Math.floor(this.props.description.length / 2))}/> :
        <Text text={this.props.description}/>;
      
        return (
          <div>
              {text}
              <a href="#" onClick={this.toggleDescription.bind(this)}>
                {this.state.currText}
              </a>  
          </div>
        );
      }
}

const Text = (props) => (
  <div id ="text"> {props.text} </div>
)

export default Description;