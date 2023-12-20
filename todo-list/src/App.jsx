import { useState } from "react";
import BottomBar from "./components/bottomBar/BottomBar";
import AddComplete from "./components/home/AddComplete/AddComplete";
import Complete from "./components/home/AddComplete/AddComplete";
import Navbar from "./components/Nav/navbar";
import TodoPupUp from "./components/TodoPupUp";

function App() {
  const [isPopUpActive, setPopUpActive] = useState(false);

  function handlePopUpClick() {
    setPopUpActive(!isPopUpActive);
    console.log(isPopUpActive);
  }

  return (
    <div>
      <Navbar />
      <AddComplete onHandlePopUpClick={handlePopUpClick} />
      <BottomBar />
      <TodoPupUp
        isPopUpActive={isPopUpActive}
        setPopUpActive={setPopUpActive}
      />
    </div>
  );
}

export default App;
