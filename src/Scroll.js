import React from "react";
import './Scroll.css'

const Scroll = (props) => {
return (
    <div style={{   overflowY : 'scroll', border : '5px solid black', height:'400px'}}>
        {props.children}
    </div>
)
}

export default Scroll




