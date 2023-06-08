import { useState } from "react";
import GetCountryButton from "./components/GetCountryButton";
import TestingButton from "./components/TestingButton";
import ErrorAPI from "./components/ErrorAPI";
import ListDown from "./components/ListDown";

function App() {
  const [flagAPISucceed, setFlagAPISucceed] = useState(false);

  const testingOnClick = () => {
    console.log("Function for calling API for SG");
  };

  return (
    <div style={{ width: "1920px", height: "1080px" }}>
      <GetCountryButton onClick={testingOnClick}></GetCountryButton>
      <TestingButton onClick={() => setFlagAPISucceed(!flagAPISucceed)} />
      {flagAPISucceed && <ListDown></ListDown>}
      {!flagAPISucceed && <ErrorAPI></ErrorAPI>}
    </div>
  );
}

export default App;
