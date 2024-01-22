import { CDN_URL } from "../utils/constants";

const RestraCard = (props) => {
  const { resData } = props;

  // Use optional chaining to handle potential undefined properties
  const cloudinaryImageId = resData?.card?.info?.cloudinaryImageId || "";
  const name = resData?.card?.info?.name || "";
  const cuisines = resData?.card?.info?.cuisines || [];
  const avgRating = resData?.card?.info?.avgRating || 0;
  const deliveryTime = resData?.card?.info?.sla?.deliveryTime || 0;
  const locality = resData?.card?.info?.locality || "";
  const areaName = resData?.card?.info?.areaName || "";
  const costForTwo = resData?.card?.info?.costForTwo || "";

  return (
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime} Mins</h5>
      <h5>
        {locality}, {areaName}
      </h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestraCard;
