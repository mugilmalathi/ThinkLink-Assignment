import React, { useState } from "react";
import "../Home/Home.scss";

import Data from "../Data";
import downarrow from "../Assets/Svg/ddownarrow.svg";

const Datamap = () => {
  const [expand1, setExpand1] = useState(null);
  const [expand2, setExpand2] = useState(null);
  const [expand3, setExpand3] = useState(null);
  const [expand4, setExpand4] = useState(null);
  const [expand5, setExpand5] = useState(null);
  const [expand6, setExpand6] = useState(null);
  const [expand7, setExpand7] = useState(null);
  const [color1, setColor1] = useState(null);
  const [color2, setColor2] = useState(null);
  const [color3, setColor3] = useState(null);
  const [color4, setColor4] = useState(null);
  const [color5, setColor5] = useState(null);
  const [color6, setColor6] = useState(null);
  const [color7, setColor7] = useState(null);

  const handleExpand1 = (el) => {
    console.log(el);
    setExpand1(!expand1);
  };
  const handleExpand2 = (el) => {
    console.log(el);
    setExpand2(!expand2);
  };
  const handleExpand3 = (el) => {
    console.log(el);
    setExpand3(!expand3);
  };
  const handleExpand4 = (el) => {
    console.log(el);
    setExpand4(!expand4);
  };
  const handleExpand5 = (el) => {
    console.log(el);
    setExpand5(!expand5);
  };
  const handleExpand6 = (el) => {
    console.log(el);
    setExpand6(!expand6);
  };
  const handleExpand7 = (el) => {
    console.log(el);
    setExpand7(!expand7);
  };

  const handleCheck1 = () => {
    setColor1(!color1);
  };
  const handleCheck2 = () => {
    setColor2(!color2);
  };
  const handleCheck3 = () => {
    setColor3(!color3);
  };
  const handleCheck4 = () => {
    setColor4(!color4);
  };
  const handleCheck5 = () => {
    setColor5(!color5);
  };
  const handleCheck6 = () => {
    setColor6(!color6);
  };
  const handleCheck7 = () => {
    setColor7(!color7);
  };

  return (
    <div className="data">
      <div className="inven">Inventory</div>
      <div className="table-map">
        <div className="title">
          <div>
            <input type="checkbox" />
          </div>
          <div>PRODUCT</div>
          <div>RATING</div>
          <div>VINTAGE</div>
          <div>QTY</div>
          <div>VOLUME</div>
          <div>COST</div>
          <div>PRICE</div>
          <div></div>
        </div>
        {/* {
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
            } */}

        <div
          className="title-data"
          style={{ height: expand1 ? "30vh" : "10vh",}}
        >
          <div>
            <input type="checkbox" onClick={handleCheck1} />
          </div>
          <div>
            <div style={{ color: color1 ? "#EF4859" : "#8C8CA1" }}>
              Staglin Family Vineyard...
            </div>
            <div>France · Sauternes </div>
          </div>
          <div>RP 95 +3</div>
          <div>1950's</div>
          <div>04</div>
          <div>Standard (750 mL)</div>
          <div>$56.95</div>
          <div>$59.95</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={handleExpand1}
            />
          </div>
        </div>

        <div
          className="title-data"
          style={{ height: expand2 ? "30vh" : "10vh" }}
        >
          <div>
            <input type="checkbox" onClick={handleCheck2} />
          </div>
          <div>
            <div style={{ color: color2 ? "#EF4859" : "#8C8CA1" }}>
            Bibi Graetz Testamatta Tos...
            </div>
            <div>Chianti · Blends and Other</div>
          </div>
          <div>RP 95 +3</div>
          <div>2015</div>
          <div>32</div>
          <div>Magnum (1500 mL)</div>
          <div>$71.95</div>
          <div>$72.95</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={() => {
                handleExpand2();
              }}
            />
          </div>
        </div>

        <div
          className="title-data"
          style={{ height: expand3 ? "30vh" : "10vh" }}
        >
          <div>
            <input type="checkbox" onClick={handleCheck3} />
          </div>
          <div>
            <div style={{ color: color3 ? "#EF4859" : "#8C8CA1" }}>
            Cayuse Syrah en Chamber...
            </div>
            <div>Syrah</div>
          </div>
          <div>RP 95 +3</div>
          <div>2012</div>
          <div>12</div>
          <div>Standard (750 mL)</div>
          <div>$139.95</div>
          <div>$150.00</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={() => {
                handleExpand3();
              }}
            />
          </div>
        </div>

        <div
          className="title-data"
          style={{ height: expand4 ? "30vh" : "10vh" }}
        >
          <div>
            <input type="checkbox" onClick={handleCheck4} />
          </div>
          <div>
            <div style={{ color: color4 ? "#EF4859" : "#8C8CA1" }}>
            Staglin Family Vineyard...
            </div>
            <div>United States · California · Blends</div>
          </div>
          <div>RP 95 +3</div>
          <div>2010</div>
          <div>04</div>
          <div>Odd Ball (5000 mL)</div>
          <div>$56.95</div>
          <div>$59.95</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={() => {
                handleExpand4();
              }}
            />
          </div>
        </div>

        <div
          className="title-data"
          style={{ height: expand5 ? "30vh" : "10vh" }}
        >
          <div>
            <input type="checkbox" onClick={handleCheck5} />
          </div>
          <div>
            <div style={{ color: color5 ? "#EF4859" : "#8C8CA1" }}>
            K Vintners Syrah Cattle king
            </div>
            <div>France · Sauternes</div>
          </div>
          <div>RP 95 +3</div>
          <div>2015</div>
          <div>25</div>
          <div>Magnum (1500 mL)</div>
          <div>$79.95</div>
          <div>$92.95</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={() => {
                handleExpand5();
              }}
            />
          </div>
        </div>

        <div
          className="title-data"
          style={{ height: expand6 ? "30vh" : "10vh" }}
        >
          <div>
            <input type="checkbox" onClick={handleCheck6} />
          </div>
          <div>
            <div style={{ color: color6 ? "#EF4859" : "#8C8CA1" }}>
            L'Ecole No. 41 Ferguson
            </div>
            <div>United state · Celifornia · Blends</div>
          </div>
          <div>RP 95 +3"</div>
          <div>2004</div>
          <div>06</div>
          <div>Odd Ball (5000 mL)</div>
          <div>$54.95</div>
          <div>$59.95</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={() => {
                handleExpand6();
              }}
            />
          </div>
        </div>

        <div
          className="title-data"
          style={{ height: expand7 ? "30vh" : "10vh" }}
        >
          <div>
            <input type="checkbox" onClick={handleCheck7} />
          </div>
          <div>
            <div style={{ color: color7 ? "#EF4859" : "#8C8CA1" }}>
            Staglin Family Vineyard...
            </div>
            <div>France · Sauternes</div>
          </div>
          <div>RP 95 +3</div>
          <div>1950's</div>
          <div>22</div>
          <div>Regular (750 mL)</div>
          <div>$56.95</div>
          <div>$59.95</div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={downarrow}
              alt=""
              onClick={() => {
                handleExpand7();
              }}
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Datamap;
