import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["Eren", "Mikasa", "Armin"]);

  function addMinion() {
    setList([...list, "Minion"]);
  }
  function removeMinion() {
    setList([...list].slice(0, -1));
  }
  return (
    <Card>
      <CardBody title="Add minion card" text="Press the buttons" />
      <button className="btn btn-primary m-1" onClick={addMinion}>
        Add
      </button>
      <button className="btn btn-primary m-1" onClick={removeMinion}>
        Remove
      </button>
      <List data={list} />
    </Card>
  );
}

export default App;
