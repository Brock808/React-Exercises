import Card, { CardBody } from "./components/Card";
import List from "./components/List";
// import Button from "./components/Button";
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
    // <Card>
    //   <CardBody title="Hi, I am the title" text="I am the text" />
    //   <List data={list} onSelect={handleSelect} />
    //   <Button isLoading={isLoading} onClick={handleClick}>
    //     Hola Mundo
    //   </Button>
    // </Card>

    <Card>
      <CardBody title="Add minion card" text="Press the buttons" />
      <button className="btn btn-primary" onClick={addMinion}>
        Agregar
      </button>
      <button className="btn btn-primary" onClick={removeMinion}>
        Eliminar
      </button>
      <List data={list} />
    </Card>
  );
}

export default App;
