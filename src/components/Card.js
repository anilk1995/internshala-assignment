import image from "../images/computer.png";
import Button from "./Button";
import CardLabel from "./CardLabel";
function Card({ item }) {
  const { price } = item;
  const discount = "20%";
  const numericValue = parseFloat(price.slice(1));
  const cuurentPrice = numericValue * (1 - parseFloat(discount) / 100);

  return (
    <div className="card-container text-white padded">
      <div className="d-flex align-items-center justify-content-center">
        <img src={image} alt="thumbnail" className="thumbnail-img" />
      </div>
      <div className="mt-6">
        <CardLabel>20% Off</CardLabel>
        <CardLabel>Limited time</CardLabel>
      </div>

      <h3 className="card-header">{item.header}</h3>
      <p className="card-title">{item.title}</p>

      <div className="d-flex">
        <span className="current-price">{`$${cuurentPrice.toFixed(2)}`}</span>
        <span className="base-price">{item.price}</span>
        <span className="discount">({discount} Off)</span>
      </div>
      <div>
        <Button className="main-card-btn w-100">View Deal</Button>
      </div>
    </div>
  );
}

export default Card;
