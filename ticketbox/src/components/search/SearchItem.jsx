import FormGroup from "../auth/FormGroup";
import "./search.scss"

const SearchItem = ()=>{


    return (
        <div className="tab-item" style={{position:'relative' , zIndex:'9'}} >
            <form className="ticket-search-form">
               <FormGroup 
                placeholder="Search"
                search
               />
            </form>
        </div>
    )
}

export default SearchItem;