import { useState } from "react";
import "./ListDown.css";

function ListDown() {
  const [selected, setSelected] = useState<any>(null);

  const toggle = (i: number) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <div className="title-content">
                <div className="title-main">
                  <h2>{i + 1}</h2>
                  <h2>{item.name}</h2>
                  <h2>&#x2303;</h2>
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
    name: "Book Name 2",
    author: "Author",
    borrower: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
  {
    name: "Book Name 3",
    author: "Medium author",
    borrower: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
];

export default ListDown;
