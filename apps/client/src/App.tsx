import "./App.css";
import { Button } from "ui";
import { client } from "./api/trpc";

function App() {
  const getData = async () => {
    const data = await client.example.getData.query();
    console.log(data);
  };

  return (
    <>
      <Button onClick={getData}>Hello world</Button>
    </>
  );
}

export default App;
