// import React from 'react'
import './Modal.css'
import React,{Component} from 'react'


export default class Modal extends Component{
    render(){
        return(

                <div className="Modal">
                    <div className="second_section">
                        <p className="title">{this.props.message}</p>
                        <ul className="ul_modal">
                            <li>Yes</li>
                            <li>No</li>
                         </ul>
                    </div>
                </div>
        )
    }
}

Modal.defaultProps = {
    message: 'You want to Delete?'
}



// ###Functional Modal#####


// export default function Modal({title="you want Delete?"}){  

//     return(
//             <div className="Modal">
//                 <div className="second_section">
//                       <p className='title'>{title}</p>
//                         <ul className="ul_modal">
//                             <li>Yes</li>
//                             <li>No</li>
//                         </ul>
//                 </div>
//             </div>
//         )
// }