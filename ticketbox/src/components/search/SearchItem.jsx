import "./search.scss"

const SearchItem = ()=>{


    return (
        <div className="tab-item" style={{position:'relative' , zIndex:'9'}} >
            <form className="ticket-search-form">
                <div className="">
                    <input type='text' placeholder="Search Of Movie" />
                </div>
            </form>
        </div>
    )
}

export default SearchItem;