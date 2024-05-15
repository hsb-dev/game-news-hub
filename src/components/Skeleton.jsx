import React, { useEffect, useState, useRef, useCallback } from "react";
import "../styles/Skeleton.scss"
function Skeleton(){

  const [dummy, setDummy] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
    return(
      <>
        {dummy.map(function (news) {
            return (
              <a className="skl-contents-card" >
    
                <div className="skl-content-img"></div>
    
                <div className="skl-contents-tags">
                  <div className="skl-contents-tag"></div>
                </div>
                <div className="skl-contents-title"></div>
    
                <div className="skl-contents-info">
                  <div className="skl-contents-info-pubname"></div>
                  <div className="skl-contents-info-dates"></div>
                </div>
    
              </a>
            )
          })}
        </>
    )
}

export default Skeleton;