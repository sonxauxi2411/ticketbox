import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

const Slide = ({ data }) => {
  const navigate = useNavigate();
  const isIpadMin = useMediaQuery({ maxWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const [prvieSlide, setPrviewSlide] = useState(3);
  useEffect(() => {
    if (isIpadMin) {
      setPrviewSlide(2);
    }
    if (isMobile) {
      setPrviewSlide(1);
    }
    if (isDesktop) {
      setPrviewSlide(3);
    }
  }, [isIpadMin, isMobile, isDesktop]);
  return (
    <Swiper
      slidesPerView={prvieSlide}
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
        const formattedMonth = format(new Date(e.start_date), 'MMM', { locale: enUS });
        const formattedDay = format(new Date(e.start_date), 'dd', { locale: enUS });
  
        return (
          <SwiperSlide key={e._id} onClick={() => navigate(`/event/${e._id}`)}>
            <div className="card">
              <div className="event-date">
                <h6 className="date-title">{formattedDay}</h6>
                <span>{formattedMonth}</span>
              </div>
              <img src={e.background} alt="a" width="100%" />
              <div
                className="p-3 card-cate-body"
                style={{ minHeight: "134px" }}
              >
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
