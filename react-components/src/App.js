import { GoBell, GoGlobe, GoCopy } from "react-icons/go";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Button secondary rounded>
          <GoBell />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoCopy/>
          Success
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger rounded>
          <GoGlobe/>
          Errything
        </Button>
      </div>
      <div>
        <Button primary>Primary</Button>
      </div>
    </>
  );
}

export default App;