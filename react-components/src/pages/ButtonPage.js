import { GoBell, GoGlobe, GoCopy } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <>
      <div>
        <Button secondary rounded onClick={handleClick}>
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

export default ButtonPage;