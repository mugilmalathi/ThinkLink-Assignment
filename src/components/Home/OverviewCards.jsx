import React from 'react'
import "./Home.scss"

import card1 from "../Assets/Svg/card1.svg"
import card2 from "../Assets/Svg/card2.svg"
import card3 from "../Assets/Svg/card3.svg"
import card4 from "../Assets/Svg/card4.svg"

const OverviewCards = () => {

    const cardsData = [
        {
            name: "Open orders",
            num : "239",
            logo : card1,
            color: "FFAA2C",
            class : "card1"
        },
        {
            name: "Orders in transit",
            num : "126",
            logo : card2,
            color: "2C67FF",
            class : "card2"
        },
        {
            name: "Fullfilled Orders",
            num : "1,254",
            logo : card3,
            color: "00CF3A",
            class : "card3"
        },
        {
            name: "Cancelled orders",
            num : "35",
            logo : card4,
            color: "FF1C1C",
            class : "card4"
        }
    ]

    console.log(cardsData.color, "cadr data colors");

  return (
    <div className='cards'>
        {
            cardsData.map((el)=>{
                return(
                    <div className={el.class} style={{borderTop: `4px solid #${el.color}`}}>
                        <div>
                            <div className='card-name'>{el.name}</div>
                            <div className='card-num'>{el.num}</div>
                        </div>
                        <div><img className='card-img' src={el.logo} alt="" /></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OverviewCards