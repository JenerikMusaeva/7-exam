import { Link } from "react-router-dom";

export default function Place({ data }) {
  return (
    <Link to={`/dishes/${data.id}`}>
      <div className="place">
        <div className="place_img_box">
          <img className="place_img" src={data.img} />
        </div>
        <div className="place_info">
          <h3 className="place_title">{data.name}</h3>
          <p>{data.cuisine}</p>
        </div>
      </div>
    </Link>
  );
}
