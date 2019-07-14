import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import ItemCard from "./Components/ItemCard";
import '../scss/app.scss';

const App: FunctionComponent = () => {
  return (
    <div>
      <ItemCard />
      TEST
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

