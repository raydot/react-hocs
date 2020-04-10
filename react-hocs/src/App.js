import React, { Component } from "react";
import Hoc from "./HOC";
import StockList from "./StockList";
import UserList from "./UserList";

const StocksData = [
  {
    id: 1,
    name: "Commcom",
  },
  { id: 2, name: "W. H. Hambderhammer Inc." },
  { id: 3, name: "Stockly" },
];

const UsersData = [
  {
    id: 1,
    name: "Bartleby",
  },
  {
    id: 2,
    name: "Jubjub",
  },
  {
    id: 3,
    name: "Whitlen",
  },
];

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UserList, UsersData);

class App extends Component {
  render() {
    return (
      <div>
        <Stocks></Stocks>
        <Users></Users>
      </div>
    );
  }
}
//App = Hoc(App);

export default App;
