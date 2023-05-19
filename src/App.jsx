import { useState } from "react";
import { GroupActions, Landing, Posts } from "./components";

const App = () => {
  const [show, setShow] = useState(false);
  const [haveAcc, setHaveAcc] = useState(true);

  return (
    <div className="App">
      <Landing haveAcc={haveAcc} show={show} setShow={setShow} />
      <Posts show={show} setShow={setShow} haveAcc={haveAcc} />
      <GroupActions
        haveAcc={haveAcc}
        setHaveAcc={setHaveAcc}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default App;
