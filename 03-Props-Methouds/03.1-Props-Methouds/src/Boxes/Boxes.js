import React from 'react'
import './Boxes.css'
// ------------prop-destructuring-------------
function Boxes({title:productBox , image = "images/null.jpg" , price ,count , children}){   //=========>second way
    // let {title , image , price ,count} = props  ====> first way
    let title = "Product"

    return(
        count > 0 && 
            <div className="boxes">
                <h1>{title}</h1>
                <div className="box">
                    <div className="box_img">
                    <img src={image} />
                    </div>
    
                    <div className="box_content">
                        <h2 className="title">{productBox}</h2>
                        <span className="price">{price}$</span>
                        <p className="dicription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quo recusandae fugiat rem quibusdam ipsam autem vero totam </p>
                    </div>
                    {children}
                    <a href="#" className="link">Add To Card</a>
                </div>
            </div>
        )
}
export default Boxes
// ------------prop-destructuring-------------

//--------------------- fisrt section----------

// function Boxes(props){
//     console.log(props);
//     return(
//         props.count > 0 && 
//             <div className="boxes">
//                 <div className="box">
//                     <div className="box_img">
//                     <img src={props.image} />
//                     </div>
    
//                     <div className="box_content">
//                         <h2 className="title">{props.title}</h2>
//                         <span className="price">{props.price}$</span>
//                         <p className="dicription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quo recusandae fugiat rem quibusdam ipsam autem vero totam </p>
//                     </div>
//                     <a href="#" className="link">Add To Card</a>
//                 </div>
//             </div>
//         )
// }
// export default Boxes


//--------------------- fisrt section----------