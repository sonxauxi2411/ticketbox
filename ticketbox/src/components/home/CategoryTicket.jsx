import Slide from './Slide';
import './home.scss'

const CategoryTicket = ()=>{

    return (

        <div className="category-section">
            <div className='container'>
                <div className='tab'>
                    <div className='section-header-2'>
                        <div className='left'>
                           <h2 className='title'>
                            Movies
                           </h2>
                           <p>Be sure not to miss these Movies today.</p>
                        </div>
                        <ul className='tab-menu'>
                                <li>Now Showing</li>
                                <li>coming soon</li>
                        </ul>
                    </div>
                    <div>
                        <Slide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryTicket;