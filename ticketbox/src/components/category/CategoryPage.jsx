import Header from "../header/Header";
import banner from "../../assets/banner05.jpg";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import eventApi from "../../api/modules/event.api";
import "./category.scss";
import EventList from "../event/EventList";

const filter = ["event", "sport", "stage", "workshop"];

const CategoryPage = () => {
  const [events, setEvents] = useState([]);
  const [checkCate, setCheckCate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(6);
  const [totalPage , setTotalPage] = useState(0)
  const [page, setPage] = useState(1);
  const handleChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setShow(selectedValue);
  };
  useEffect(() => {
    const fetchEvent = async ({ categories }) => {
      try {
        setLoading(true);
        const res = await eventApi.getFilterCate({ categories, show, page });
        setTotalPage(res.totalPages)
        setEvents(res.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvent({ categories: checkCate });
  }, [checkCate, show, page]);

  const handleChangeCate = (cate) => {
    const { checked, value } = cate.target;
    if (checked) {
      setCheckCate((prevCheckCate) => [...prevCheckCate, value]);
    } else {
      setCheckCate((prevCheckCate) =>
        prevCheckCate.filter((item) => item !== value)
      );
    }
  };
  console.log(page)


  return (
    <>
      <Header />
      <div className="banner-section">
        <div
          className="home-bg"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className="container">
          <div className="banner-content">
            <h1 className="title">
              <span>GET </span>
              <span style={{ color: "#31d7a9" }}>Event </span>
              <span>Tickets </span>
            </h1>
          </div>
        </div>
      </div>
      <Search />

      {/* <input type='checkbox' value='event' checked={checkCate.includes('event')}  onChange={handleChangeCate} />
        <input type='checkbox' value='sport' checked={checkCate.includes('sport')}   onChange={handleChangeCate}/> */}

      <div className="event-section">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-header">CATEGORIES</div>
                <div className="card-body">
                  <ul>
                    {filter.map((f) => {
                      return (
                        <li className="d-flex" key={f}>
                          <input
                            type="checkbox"
                            value={f}
                            id={f}
                            checked={checkCate.includes(f)}
                            onChange={handleChangeCate}
                          />
                          <label htmlFor={f}>{f}</label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex flex-column" style={{ gap: "10px" }}>
                <div className="filter-area">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <span>Show:</span>
                    <div className="select">
                      <select name="show" value={show} onChange={handleChange}>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  <div>Sort</div>
                </div>
                {loading ? (
                  <div>
                    {" "}
                    <h1>Loading.....</h1>
                  </div>
                ) : (
                  <EventList events={events} totalPage={totalPage} setPage={setPage} pageNumber={page}  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
