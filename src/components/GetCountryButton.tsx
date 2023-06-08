interface Props {
  onClick: () => void;
}

function GetCountryButton({ onClick }: Props) {
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
        Get Country: SG
      </button>
    </div>
  );
}

export default GetCountryButton;
