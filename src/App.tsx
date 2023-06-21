import { useEffect, useState } from "react";
import GetCountryButton from "./components/GetCountryButton";
import TestingButton from "./components/TestingButton";
import ErrorAPI from "./components/ErrorAPI";
import ListDown from "./components/ListDown";
import axios from "axios";
import "./components/ListDown.css";

export interface Book {
  name: string;
  author: string;
  borrower: string[];
}

function App() {
  const [flagAPISucceed, setFlagAPISucceed] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [bookList, setBookList] = useState<Book[]>([]);

  const testingOnClick = () => {
    axios
      .get(
        "https://06651e83-f10f-409f-a268-a9d494ec91a4.mock.pstmn.io/getRandomCountry"
      )
      .then((resp) => {
        setCountryCode(resp.data.country.country_code);
        console.log("API Called");
        gettingTop3Books();
      });
  };

  const gettingTop3Books = () => {
    axios
      .get<Book[]>(
        "https://d74b9ce7-edda-4eee-8600-66fab16e0ea4.mock.pstmn.io/getTop3ReadBook?countryCode=SG"
      )
      .then((resp2) => {
        setBookList(resp2.data);
        console.log("API2 Called");
        setFlagAPISucceed(true);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setFlagAPISucceed(false);
      });
  };

  useEffect(() => {
    console.log("Updated bookList:", bookList);
    console.log(typeof bookList);
  }, [bookList]);

  return (
    <div className="overall">
      <GetCountryButton
        onClick={testingOnClick}
        countryCode={countryCode}
      ></GetCountryButton>
      {flagAPISucceed && <ListDown bookList={bookList}></ListDown>}
      {!flagAPISucceed && <ErrorAPI></ErrorAPI>}
    </div>
  );
}

export default App;
