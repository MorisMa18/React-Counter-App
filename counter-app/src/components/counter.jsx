import React, { Component } from "react";

class Counter extends Component {
  // SINGLE SOURCE OF TRUTH
  // state = {
  //      value: this.props.counter.value,
  //      tags: ['tag1', 'tag2', 'tag3']
  // };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // SINGLE SOURCE OF TRUTH
  // handleIncrement = product => {
  //     this.setState({value:this.state.value + 1});
  // }

  render() {
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul> 
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
