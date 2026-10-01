import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Eren", "Mikasa"];
  return (
    <Card>
      <CardBody title="Hi, I am the title" text="I am the text" />
      <List data={list} />
    </Card>
  );
}

export default App;
