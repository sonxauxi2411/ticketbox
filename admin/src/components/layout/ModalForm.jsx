import './layout.scss'
import { IoCloseSharp } from "react-icons/io5";


const ModalForm = ({children, title, close})=>{

    return (
        <div className="">
            <div className=' modal-header'>
                <h5>Add {title}</h5>
                <span className='btn-icon-close' onClick={close}><IoCloseSharp /></span>
            </div>
            <div className='modal-body'>{children}</div>
        </div>
    )
}

export default ModalForm;