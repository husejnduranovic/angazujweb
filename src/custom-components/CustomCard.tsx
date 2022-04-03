import { Link } from "react-router-dom";
import klix from "../assets/images/cardPics.jpg"

export interface ICard {
    price: number,
    text: string,
    title: string,
    path?: string

}

const CustomCard: React.FC<ICard> = (props: any) => {
  return (
    <div className="card w-25 shadow">
        <div className="klix">
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-muted">
          {props.text}
        </p>
      </div>
      <div className="card-body d-flex justify-content-between">
        <i className="card-text h6">{props.price + " KM"}</i>
        <Link to={"/jobs/:id"}>Read more</Link>
      </div>
    </div>
  );
};

export default CustomCard;
