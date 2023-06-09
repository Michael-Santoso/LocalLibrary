import { useEffect, useState } from "react";
import GetCountryButton from "./components/GetCountryButton";
import TestingButton from "./components/TestingButton";
import ErrorAPI from "./components/ErrorAPI";
import ListDown from "./components/ListDown";
import axios from "axios";

function App() {
  const [flagAPISucceed, setFlagAPISucceed] = useState(false);
  const [countryCode, setCountryCode] = useState();

  const testingOnClick = () => {
    axios
      .get(
        "https://06651e83-f10f-409f-a268-a9d494ec91a4.mock.pstmn.io/getRandomCountry"
      )
      .then((resp) => {
        setCountryCode(resp.data.country.country_code);
        console.log("API Called");
      });
  };

  return (
    <div style={{ width: "1920px", height: "1080px" }}>
      <GetCountryButton
        onClick={testingOnClick}
        countryCode={countryCode}
      ></GetCountryButton>
      <TestingButton onClick={() => setFlagAPISucceed(!flagAPISucceed)} />
      {flagAPISucceed && <ListDown></ListDown>}
      {!flagAPISucceed && <ErrorAPI></ErrorAPI>}
    </div>
  );
}

export default App;
