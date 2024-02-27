import image from "../images/computer.png";
import BestValueLabel from "./BestValueLabel";
import Button from "./Button";
import StarRating from "./StarRating";
function MainCardItem({ item }) {
  return (
    <div className="d-flex align-items-center justify-content-between mt-3  card-box gap-10">
      <div className="item-number">{item.id}</div>

      <BestValueLabel rating={item.rating} />

      <div>
        <img src={image} alt="thumbnail" className="thumbnail-img" />
      </div>

      <div>
        <h3 className="font-s text-black-45 font-bold">{item.title}</h3>
        <span className="font-s text-black-45">{item.description}</span>
        <h3 className="font-s text-black-45 font-bold">Main highlights</h3>
        <span className="font-s text-black-45">
          [What you get]: {item.highlights}
        </span>
      </div>
      <div className="rating-box">
        <span className="rating">{item.rating}</span>
        <span className="rating-type">Exceptional</span>
        <StarRating rating={item.rating} />
      </div>
      <div className="align-self-end">
        <Button className="main-card-btn">View</Button>
      </div>
    </div>
  );
}

export default MainCardItem;
/* Rectangle */
