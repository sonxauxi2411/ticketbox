import { useNavigate } from "react-router-dom";
import CategoryPage from "../category/CategoryPage";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

const EventList = ({ events, totalPage, setPage, pageNumber }) => {
  const navigate = useNavigate();
  const pageButtons = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );
  const isIpad = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth:576 });
  return (
    <>
      <div className={`event-list ${isMobile ? 'd-flex flex-column' : ""}`}>
        {events?.map((e) => {
          return (
            <div
              className="card "
              key={e._id}
              onClick={() => navigate(`/event/${e._id}`)}
            >
              <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
              </div>
              <img src={e.background} alt="a" width="100%" />
              <div className="p-3 card-cate-body">
                <h5 className="pb-2" style={{fontSize:`${isIpad ? '14px' : ""}`}}>{truncateString(e.display_name, isIpad ? 42 :72)}</h5>
                <span style={{fontSize:`${isIpad ? '12px' : ""}`}}>{e.org}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="">
        <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
          <button className="btn btn-page" onClick={() => setPage(pageNumber - 1)}>
            <span>
              <FaAngleDoubleLeft />
            </span>
            <span>Prev</span>
          </button>
          <div className="d-flex">
            {pageButtons.map((page) => (
              <button
                className={`btn btn-page ${page == pageNumber ? "active-page" : ""}`}
                key={page}
                onClick={() => setPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="btn btn-page" onClick={() => setPage(pageNumber + 1)}>
            <span>Next</span>
            <span>
              <FaAngleDoubleRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default EventList;
