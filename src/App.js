import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [{
        key: 1,
        title: "Read Malazan",
        description: "Finish reading Malazan series in 2018",
      }, {
        key: 2,
        title: "Watch 2.0",
        description: "Watch Robo 2.0 in December 2018"
      }, {
        key: 3,
        title: "Vote in Elections",
        description: "Elections on December 7, 2018. Don't forget to vote."
      }, {
        key: 4,
        title: "Go on a Tour",
        description: "Need to go on a tour to Ladakh."
      }, {
        key: 5,
        title: "Learn React Native",
        description: "React Native for Mobile App development. Learn it quickly"
      }, {
        key: 6,
        title: "Write an Article",
        description: "Write an article on Medium about How to create a node app and use Mongo in it."
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <h2 className="heading">To Do Application</h2>
        <div className="divMixins MT30">
          <div className="DIB">Using Mixins</div>
          <div className="primaryButton">Hello</div>
          <div className="successButton">Success</div>
          <div className="errorButton">Error</div>
        </div>
        <div className="divInheritance MT30">
          <div className="DIB">Using Inheritance</div>
          <div className="firstButton">Hello</div>
          <div className="secondButton">Success</div>
          <div className="thirdButton">Error</div>
        </div>
        <div className="divTodo">
          {
            this.state.todo.map((e, index) => {
              return <div className={'myCard card-' + (index + 1)}>
                <div className="cardTitle">{e.title}</div>
                <div className="cardBody">{e.description}</div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
