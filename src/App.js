import React, { Component } from "react";
import AddItems from "./component/AddItems/AddItems";
import ListItems from "./component/ListItems/ListItems";

class App extends Component {
  // attributes
  //
  constructor(props) {
    super(props);

    this.state = {
      items: ["task1", "task2"],
    };
  }

  handeleItem = (item) => {
    this.setState({ items: [...this.state.items, item] });
  };

  handeleDelete = (index) => {
    this.setState({
      items: this.state.items.filter((el, i) => i !== index),
    });
  };

  render() {
    return (
      <div>
        <h1>ToDoApp</h1>
        <AddItems salem={"3alaykom"} x={10} handeleItem={this.handeleItem} />
        <ListItems
          items={this.state.items}
          handeleDelete={this.handeleDelete}
        />
      </div>
    );
  }
}
export default App;
