import { useEffect, useState } from "react";
import Slide from "./Slide";
import "./home.scss";
import eventApi from "../../api/modules/event.api";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../../redux/loading/loadingSlice";

const CategoryTicket = () => {
  const [listEvents, setListEvents] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        dispatch(setGlobalLoading(true))
        const res = await eventApi.getTopEvent();
        setListEvents(res);
        // dispatch(setGlobalLoading(false))

      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, []);
  return (
    <>
      {listEvents.map((e, index) => {
        return (
          <div className={`category-section `} style={{backgroundColor: `${index %2 ? '#001539'  : "" }`}} key={e.cate}>
            <div className="container">
              <div className="tab">
                <div className="section-header-2">
                  <div className="left">
                    <h2 className="title">{e.cate}</h2>
                    {/* <p>Be sure not to miss these Movies today.</p> */}
                  </div>
                  <ul className="tab-menu">
                    <li>Now Showing</li>
                    <li>coming soon</li>
                  </ul>
                </div>
                <div>
                  <Slide data={e.data}/>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="category-section">
        <div className="container">
          <div className="tab">
            <div className="section-header-2">
              <div className="left">
                <h2 className="title">Movies</h2>
                <p>Be sure not to miss these Movies today.</p>
              </div>
              <ul className="tab-menu">
                <li>Now Showing</li>
                <li>coming soon</li>
              </ul>
            </div>
            <div>
              <Slide />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CategoryTicket;
