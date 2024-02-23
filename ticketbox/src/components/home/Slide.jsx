import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Slide = () => {
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
      <SwiperSlide>
        <div className="card">
            <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
            </div>
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/02/07/64C32B.jpg"
            alt="a"
            width="100%"
          />
          <div className="p-3 card-cate-body">
            <h5 className="pb-3">FreenBecky 1st Fan Meeting in Vietnam</h5>
            <span>Ben Thanh Theatre</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
            <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
            </div>
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/02/07/64C32B.jpg"
            alt="a"
            width="100%"
          />
          <div className="p-3 card-cate-body">
            <h5 className="pb-3">FreenBecky 1st Fan Meeting in Vietnam</h5>
            <span>Ben Thanh Theatre</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
            <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
            </div>
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/02/07/64C32B.jpg"
            alt="a"
            width="100%"
          />
          <div className="p-3 card-cate-body">
            <h5 className="pb-3">FreenBecky 1st Fan Meeting in Vietnam</h5>
            <span>Ben Thanh Theatre</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
            <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
            </div>
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/02/07/64C32B.jpg"
            alt="a"
            width="100%"
          />
          <div className="p-3 card-cate-body">
            <h5 className="pb-3">FreenBecky 1st Fan Meeting in Vietnam</h5>
            <span>Ben Thanh Theatre</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
            <div className="event-date">
                <h6 className="date-title">28</h6>
                <span>Dec</span>
            </div>
          <img
            src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2024/02/07/64C32B.jpg"
            alt="a"
            width="100%"
          />
          <div className="p-3 card-cate-body">
            <h5 className="pb-3">FreenBecky 1st Fan Meeting in Vietnam</h5>
            <span>Ben Thanh Theatre</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
