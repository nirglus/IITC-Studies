import {useState} from 'react'

function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () =>{
    setChangedText(!changedText);
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>It's good to see you here</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting
