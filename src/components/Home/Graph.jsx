import React from 'react'
import "./Home.scss"

import refresh from "../Assets/Svg/refresh.svg"
import graph from "../Assets/Svg/graph.svg"
import graphgrowth from "../Assets/Svg/graphgrowth.svg"
import graphtable from "../Assets/Svg/graphtable.svg"


const Graph = () => {
  return (
    <div className='graph'>
        <div className='sales'>Sales details</div>
        <div className='graph1'>
            <div className='graph1-left'>
                <div>Total Sales Overview</div>
                <div>7 - 13 Aug 2020</div>
            </div>
            <div><img className='refresh' src={refresh} alt="" /> <span>Refresh Metrics</span></div>
            <div>Filter by | </div>
            <div>
            <select name="" id="">
                <label htmlFor="">This week</label>
                <option value="">This month</option>
                <option value="">This Year</option>
                <option value="">All Time</option>
            </select>
            </div>
        </div>
        <div className="graph2">
            <div className='graph2-left'>
                <div>
                    <div>$74,729.00</div>
                    <div><img src={graphtable} alt="" /><span>Highest revenue since 2 weeks ago</span></div>
                </div>
                <div><img src={graphgrowth} alt="" /><span>+21 from last week</span></div>
                <div><img src={graph} alt="" /></div>
            </div>
            <div className='graph2-right'>
                <div>Total Profit</div>
                <div>$ 12,545.00</div>
                <div><img src={graphgrowth} alt="" /><span>+23% from this week</span></div>
                <div>Total Products Sold</div>
                <div>329</div>
            </div>
        </div>
    </div>
  )
}

export default Graph