import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function truncateString(str, maxLength) {
  
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

const Slide = ({ data }) => {
  const navigate = useNavigate()
  // console.log(data);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        type: "fraction",
      }}
      modules={[Navigation, Autoplay]}
      className="silde w-100 h-100"
    >
      {data.map((e) => {
        return (
          <SwiperSlide key={e._id} onClick={()=>navigate(`/event/${e._id}`)}>
            <div className="card" >
              <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
              </div>
              <img src={e.background} alt="a" width="100%" />
              <div className="p-3 card-cate-body" style={{minHeight:'134px'}}>
                <h5 className="pb-3">{truncateString(e.display_name, 42)}</h5>
                <span>{truncateString(e.org, 30)}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      
    </Swiper>
  );
};

Slide.propTypes = {
  data: PropTypes.arrayOf,
};

export default Slide;
