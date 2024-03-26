import "./search.scss";
import searchBg from '../../assets/search-bg.jpg'
import iconEvent from '../../assets/icon/tab-event.png'
import iconMovie from '../../assets/icon/tab-movie.png'
import iconSong from '../../assets/icon/ticket-tab02.png'
import iconSport from '../../assets/icon/ticket-tab03.png'
import SearchItem from "./SearchItem";

const Search = () => {
  return (
    <div className="search-ticket-section padding-top pt-lg-0">
      <div className="container">
        <div className="search-tab bg-img"  style={{ backgroundImage: `url(${searchBg})` }}>
            <div className="row align-items-center mb--20" style={{position:'relative' , zIndex:'9'}}>
                <div className="col-lg-6 mb-20">
                            <div className="search-ticket-header">
                                <h6 className="category">welcome to Boleto </h6>
                                <h3 className="title">what are you looking for</h3>
                            </div>
                </div>
                <div className="col-lg-6 mb-20">
                    <ul className="tab-menu ticket-tab-menu">
                        <li className="active">
                            <div className="tab-thumb">
                                <img src={iconMovie} alt='movie' />
                            </div>
                            <span>Stage</span>
                        </li>
                        <li className="active">
                            <div className="tab-thumb">
                                <img src={iconSong} alt='song' />
                            </div>
                            <span>Event</span>
                        </li>
                        <li className="active">
                            <div className="tab-thumb">
                                <img src={iconSport} alt='sport' />
                            </div>
                            <span>Event</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-area">
                {/* <SearchItem /> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
