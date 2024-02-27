import Card from "./Card";
import { items } from "./MainCards";

const cardItems = [items[0], items[1], items[3]];
function Cards() {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between">
      {cardItems.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
