function CardLabel({ children }) {
  const style = {
    backgroundColor: "#F2F4F7",
    color: " #074786",
    display: "inline-block",
    fontFamily: "Inter",
    fontSize: " 13px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",
    marginRight: "10px",
    padding: "5px",
    borderRadius: "8px",
  };
  return <span style={style}>{children}</span>;
}

export default CardLabel;
