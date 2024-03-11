import CategoryPage from "../category/CategoryPage";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

const EventList = ({ events }) => {
  return (
    <>
      <div className=" event-list">
        {events.map((e) => {
          return (
            <div className="card " key={e._id}>
              <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
              </div>
              <img src={e.background} alt="a" width="100%" />
              <div className="p-3 card-cate-body">
                <h5 className="pb-2">{truncateString(e.display_name, 72)}</h5>
                <span>{e.org}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventList;
