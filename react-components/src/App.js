import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: 'Alright, lets mafia things up a bit',
      content: 'But I know you in the future. I cleaned your poop. Yes, except the Dave Matthews Band does not rock. Now what? I do not want to be rescued.',
    },

    {
      id: 3,
      label: 'Hi, I am a naughty nurse',
      content: 'Would you censor the Venus de Venus just because you can see her spewers?'
    },

    {
      id: 2,
      label: 'On second thoughts, let\'s not go there. It is a silly place.',
      content: 'He hasn\'t got shit all over him. Now, look here, my good man. Well, I got better. Found them?'
    }

  ];

  return (
    <>
      <div>
        <Accordion items={ items } />
      </div>
    </>
  );
}

export default App;