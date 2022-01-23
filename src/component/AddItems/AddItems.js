import React, { Component } from "react";
class AddItems extends Component {
  constructor(props) {
    super(props);
    console.log("props : ", props);
    this.state = {
      text: "",
    };
  }
  handelChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>AddItem</h2>
        <input
          type="text"
          onChange={this.handelChange}
          value={this.state.text}
        />
        <button
          onClick={() => {
            this.props.handeleItem(this.state.text);
            this.setState({ text: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddItems;
