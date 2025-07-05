const RestuarantCard = ({ name, cloudinaryImageId, areaName, avgRating }) => {
  return (
    <div className="restuarant-card" style={{ backgroundColor: "yellow " }}>
      <img
        className="restuarant-logo"
        alt="restuarant-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestuarantCard;
