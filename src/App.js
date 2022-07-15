import React from "react";
import Input from "./components/Input";
import Words from "./components/Words";

import './App.css';

const App = () => {
  let defaultList = [
    'apple',
    'banana',
    'orange',
    'peach',
    'strawberry',
    'blueberry'
  ]
  const [fruits, setFruits] = React.useState(defaultList);

  const filterWord = (e) => {
    if (e.target.value === '') {
      return setFruits(defaultList);
    }
    const filteredFruit = defaultList.filter(word => {
      return word.toLowerCase().startsWith(e.target.value);
    })
    setFruits(filteredFruit);
  }
  return (
    <div id="app">
      <Input filterWord={filterWord}/>
      <Words fruits={fruits}/>
    </div>
  )
}

export default App;