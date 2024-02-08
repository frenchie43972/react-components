import { useState } from "react";

function Dropdown({options}) {
  // Initialize a piece of state called `isOpen`.
  // `isOpen` tracks whether the dropdown is currently open or closed.
  // Initially, `isOpen` is set to false, meaning the dropdown is closed.
  const [isOpen, setIsOpen] = useState(false);

  // `handleClick` toggles the `isOpen` state.
  // When called, it sets `isOpen` to the opposite of its current value.
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // When an option is clicked, this function closes the dropdown.
  const handleOptionClick = (option) => {
    setIsOpen(false);
    console.log(option);
  };

  // Map over the `options` prop to generate JSX for each option.
  // For each `option` object in the `options` array, create a div element.
  // The onClick handler calls `handleOptionClick` with the current option.
  const renderedOptions = options.map ((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  // Render the Dropdown component.
  // Initially, it displays a div with "Select..." text. Clicking this div toggles the dropdown open/closed state via `handleClick`.
  // If `isOpen` is true, the list of options (`renderedOptions`) is displayed.
  // The use of `{isOpen && <div>{renderedOptions}</div>}` is a conditional rendering,
  // meaning the options are only shown when `isOpen` is true.
  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
