import { useEffect } from "react";

interface Props {
  onClick: () => void;
  countryCode?: String;
}

function GetCountryButton({ onClick, countryCode }: Props) {
  useEffect(() => {
    console.log("Country code changed:", countryCode);
  }, [countryCode]);

  return (
    <div>
      <button
        onClick={onClick}
        style={{
          fontSize: "15px",
          width: "150px",
          height: "35px",
          border: "1px solid red",
          borderRadius: "0px",
          color: "black",
          backgroundColor: "#FFEBEB",
          display: "block",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        Get Country: {countryCode}
      </button>
    </div>
  );
}

export default GetCountryButton;
