import "./event.scss";
import PropTypes from "prop-types";

import TicketCard from "../ticket/TicketCard";

const EventContent = ({ tickets, org }) => {

  return (
    <div className="event-content-section">
      <div className="container">
        <div className="event-cotent">
          <div className="event-about">
            <h2>About Event</h2>
            <div className="about">
              Lưu ý: - Danh sách khán giả may mắn trúng quyền lợi Hi-Bye, Signed
              Poster và Signed Polaroid sẽ được công bố vào ngày 25 tháng 3 năm
              2024 thông qua các nền tảng mạng xã hội @doconcert. - 1 vé chỉ
              được nhận 1 Fan Benefit ngẫu nhiên (Ngẫu nhiên tham gia Hi-Bye
              hoặc nhận Signed Poster hoặc nhận Signed Polaroid). - Trong trường
              hợp số lượng vé ít hơn đặc quyền đã công bố, tất cả đặc quyền sẽ
              được phân bổ ngẫu nhiên dựa trên tất cả các đặc quyền trong mỗi
              giá vé. - Những người tham dự Photo session đồng ý rằng công ty sẽ
              công bố ảnh với mục đích cung cấp ảnh cho các người tham dự theo
              bất kỳ cách nào mà công ty cho là phù hợp mà không cần thông báo
              trước. - Photo session và Hi-Bye sẽ bắt đầu sau khi buổi
              fanmeeting kết thúc. Thời gian đăng ký sẽ được thông báo sau. -
              Công ty có quyền từ chối cho vào và/hoặc tham gia vào bất kỳ hoạt
              động nào đối với bất kỳ người sở hữu vé vi phạm nội quy và quy
              định của fanmeeting. - Quyết định của công ty là quyết định cuối
              cùng. Công ty có quyền thay đổi bất kỳ điều khoản và điều kiện nào
              mà không cần thông báo trước.
            </div>
          </div>
          <div className="event-ticket">
            <h2>About Ticket</h2>
                <TicketCard tickets={tickets} />
          </div>

          <div className="event-org">
            <h2>About Organizer</h2>
            <div className="event-org-card">
              <img src={org?.img} alt='org-img' />
              <div >
                <h3>{org?.display_name}</h3>
                <p>{org?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventContent.propTypes = {
  tickets: PropTypes.array.isRequired,
  org: PropTypes.object.isRequired,
};

export default EventContent;
