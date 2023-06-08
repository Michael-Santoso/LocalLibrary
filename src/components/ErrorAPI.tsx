function ErrorAPI() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "50px",
          border: "1px solid black",
          borderRadius: "0px",
          color: "black",
          backgroundColor: "white",
          display: "flex",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
        }}
      >
        <div
          style={{ textAlign: "center", fontSize: "15px", fontWeight: "600" }}
        >
          No data found
        </div>
      </div>
    </div>
  );
}

export default ErrorAPI;
