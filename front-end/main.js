// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Sections = ['intro', 'git', 'vagrant', 'nodejs', 'sass', 'react', 'conclustion'];

var Control = React.createClass({
  render: function(){
    return(
        <li id={this.props.text + "_item"}><a href="#" id={this.props.text}>{this.props.text}</a></li>
    )
  }
});

var ControlList = React.createClass({ 
  render: function(){
    var controls = this.props.data.map(function(control){
      return(
          <Control text={control}></Control>
      )
    })
    return(    
        <ul id="topic-selection">
          {controls}
        </ul>
    )
  }
})

ReactDOM.render(
  <ControlList data={Sections}/>,
  document.getElementById('ControlList')
);