import { useState } from "react";
import { Book } from "../App.tsx";
import "./ListDown.css";
import ErrorAPI from "./ErrorAPI.tsx";

interface Props {
  bookList: Book[];
}

function ListDown({ bookList }: Props) {
  const [selected, setSelected] = useState<any>(null);

  const toggle = (i: number) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  if (bookList.length === 0) {
    return <ErrorAPI></ErrorAPI>;
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {bookList.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <div className="title-content">
                <div className="title-main">
                  <div className="item-number">{i + 1}</div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-dropdown">&#x2303;</div>
                </div>
                <h6 className="subscript">{"by " + item.author}</h6>
              </div>
            </div>
            <div className={selected == i ? "content.show" : "content"}>
              {item.borrower.map((name, subi) => (
                <div key={subi} className="names">
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
const data = [
  {
    name: "Book Name 1",
    author: "Very very long author name",
    borrower: [
      "Very very very long name of book borrower",
      "Short",
      "Medium Name",
    ],
  },
  {
    name: "Very very very long book name",
    author: "Author",
    borrower: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
  {
    name: "ShortBook",
    author: "Medium author",
    borrower: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
];
*/

export default ListDown;
