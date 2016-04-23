// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var PubSub = require('pubsub-js');
var Sections = ['intro', 'git', 'vagrant', 'nodejs', 'sass', 'react', 'conclusion'];

var Control = React.createClass({
  onclick: function() {
    // when a product is clicked on, we publish a message on the topic 'products' and we pass the product name
    PubSub.publish('presentationChange', this.props.text);
    console.log("published " + this.props.text);
    this.setState({ currentPres: this.props.text});
  },
  render: function(){
    return(
        <li className={this.props.selected} id={this.props.text + "_item"}>
          <a className={this.props.selected} href="#" onClick={this.onclick} id={this.props.text}>{this.props.text}</a>
        </li>
    )
  }
});

var ControlList = React.createClass({
  getInitialState: function() {
    return ({ currentPres: "intro" });
  },
  componentWillMount: function() {
    this.pubsub_token = PubSub.subscribe('presentationChange', function(topic, pres) {
      this.setState({ currentPres: pres });
    }.bind(this));
  },
  render: function(){
    var state = this.state  
    var controls = this.props.data.map(function(control, index){
      var currentClass = state.currentPres == control ? "selected" : "";
      console.log
      return(
          <Control key={index} text={control} selected={currentClass}></Control>
      )
    });
    return(    
        <ul id="topic-selection">
          {controls}
        </ul>
    )
  }
});

var PresentationFrame = React.createClass({
  getInitialState: function() {
    return { presentation: "intro-presentation.html" };
  },
  componentWillMount: function() {
    // when React renders me, I subscribe to the topic 'presentationChange'
    // .subscribe returns a unique token necessary to unsubscribe
    this.pubsub_token = PubSub.subscribe('presentationChange', function(topic, pres) {
      // update my selection when there is a message
      this.setState({ presentation: pres + "-presentation.html" });
    }.bind(this));
  },
  componentWillUnmount: function() {
    PubSub.unsubscribe(this.pubsub_token);
  },
  render: function(){
    //var presentation = "git-presentation.html";
    return(
      <iframe src={this.state.presentation}></iframe>
    )
  }
})

ReactDOM.render(
  <ControlList data={Sections}/>,
  document.getElementById('ControlList')
);

ReactDOM.render(
  <PresentationFrame />,
  document.getElementById('PresentationFrame')
);