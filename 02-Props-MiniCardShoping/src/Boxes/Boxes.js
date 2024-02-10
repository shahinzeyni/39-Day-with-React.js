import React from 'react'
import './Boxes.css'
function Boxes(props){
    console.log(props);
    return(
        <div className="boxes">
            <div className="box">
                <div className="box_img">
                <img src={props.image} />
                </div>

                <div className="box_content">
                    <h2 className="title">{props.title}</h2>
                    <span className="price">{props.price}</span>
                    <p className="dicription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quo recusandae fugiat rem quibusdam ipsam autem vero totam </p>
                </div>
                <a href="#" className="link">Add To Card</a>
            </div>
        </div>
    )
}
export default Boxes