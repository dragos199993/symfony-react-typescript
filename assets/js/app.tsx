import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import ItemCard from "./Components/ItemCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/app.scss';
import { ROOT } from "./constants/general";
import Header from "./Components/shared/Header";

const App: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <ItemCard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(ROOT));

