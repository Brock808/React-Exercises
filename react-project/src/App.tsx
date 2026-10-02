import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const list = ["Goku", "Eren", "Mikasa"];
  const handleSelect = (element: string) => {
    console.log("imprimiendo " + element);
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  return (
    <Card>
      <CardBody title="Hi, I am the title" text="I am the text" />
      <List data={list} onSelect={handleSelect} />
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default App;
