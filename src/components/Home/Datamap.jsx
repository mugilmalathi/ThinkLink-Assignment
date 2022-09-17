import React, { useState } from 'react'
import "../Home/Home.scss"

import Data from "../Data"
import downarrow from "../Assets/Svg/ddownarrow.svg"

const Datamap = () => {

    const [expand, setExpand] = useState(null)
    const [color, setColor] = useState(null)

    const handleExpand = (el)=>{
        console.log(el)
        if(el.id === "1"){
            setExpand(!expand)
        }
    }

    const handleCheck = ()=>{
        setColor(!color)
    }

  return (
    <div className='data'>
        <div className='inven'>Inventory</div>
        <div className='table-map'>
            <div className='title'>
                <div><input type="checkbox" /></div>
                <div>PRODUCT</div>
                <div>RATING</div>
                <div>VINTAGE</div>
                <div>QTY</div>
                <div>VOLUME</div>
                <div>COST</div>
                <div>PRICE</div>
                <div></div>
            </div>
            {
                Data.map((el)=>{
                    return(
                        <div className="title-data" style={{height : expand ? "30vh" : "10vh"}}>
                            <div><input type="checkbox" onClick={handleCheck}/></div>
                            <div>
                                <div style={{color: color ? "#EF4859" : "#8C8CA1"}}>{el.product1}</div>
                                <div>{el.product2}</div>
                            </div>
                            <div>{el.rating}</div>
                            <div>{el.vintage}</div>
                            <div>{el.qty}</div>
                            <div>{el.volume}</div>
                            <div>{el.cost}</div>
                            <div>{el.price}</div>
                            <div><img style={{cursor:"pointer"}} src={downarrow} alt="" onClick={()=>{
                                handleExpand(el)
                            }}/></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Datamap