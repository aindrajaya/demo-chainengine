import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/style.css";
import { Home } from "./components/Home";

import { GlobalProvider } from "./context/GlobalState";
import { AddPlayer } from "./components/AddPlayer";
import { TransferNFT } from "./components/TransferNFT";
import { AddItem } from "./components/AddItem";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddItem} exact />
        <Route path="/addPlayer" component={AddPlayer} exact />
        <Route path="/transfer/:id" component={TransferNFT} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
