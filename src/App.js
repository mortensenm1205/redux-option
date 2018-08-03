import React, { Component } from 'react';
import { connect } from 'react-redux';
import { optionSelection } from './actions/index';
// Creating this subcomponent to show redux can be transfered to
// other components from App.js
import { Option1 } from './components/Option1.js';
import { ExampleOne } from './components/Example1';

class App extends Component {


  //This handle change will update the state, which then
  //the condition will be tested and re rendered giving the
  //user to choose between options
  handleChange = e => {
    this.props.optionSelected(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <form onSubmit={this.handleSubmit}>
            <Option1 option={this.props.currentOption.currentOption} handleChange={this.handleChange} />
            <section>
              <label>Option 2</label>
              <input
                type="radio"
                value="option2"
                checked={this.props.currentOption.currentOption === "option2"}
                onChange={this.handleChange} />
            </section>
            <section>
              <label>Option 3</label>
              <input
                type="radio"
                value="option3"
                checked={this.props.currentOption.currentOption === "option3"}
                onChange={this.handleChange} />
            </section>
          </form>
          <ExampleOne option={this.props.currentOption.currentOption} />
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      currentOption: state.optionSelect
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      optionSelected: (option) => dispatch(optionSelection(option))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App);
