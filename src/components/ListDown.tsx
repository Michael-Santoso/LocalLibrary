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
                  <h2>{item.question}</h2>
                  <h2>&#x2303;</h2>
                </div>
                <h6 className="subscript">{"by Author" + (i + 1)}</h6>
              </div>
            </div>
            <div className={selected == i ? "content.show" : "content"}>
              {item.answer.map((name, subi) => (
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
    question: "Book Name 1",
    answer: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
  {
    question: "Book Name 2",
    answer: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
  {
    question: "Book Name 3",
    answer: [
      "First_Name Last_Name",
      "First_Name Last_Name",
      "First_Name Last_Name",
    ],
  },
];

export default ListDown;
