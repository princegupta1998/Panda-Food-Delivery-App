import "./shimmerUI.css";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper container">
      <h1 className="shimmer-heading"></h1>
      <div className="shimmer-filters">
        <button className="shimmer-filter-item"></button>
      </div>
      <div className="shimmer-card-wrapper">
        {Array(7)
          .fill()
          .map((_, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
