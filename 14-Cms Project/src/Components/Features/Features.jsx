import React from 'react'
import "./Features.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function Features() {
  return (
    <div className='features'>
        <div className="featuresItem">
            <span className="featureTitle">Revanue</span>
            <div className="featuresContainer">
                 <span className="featuresFirst">$2,415</span>
                 <span className="featuresSecond">
                 <span>-11.4</span>
                 <ArrowDownwardIcon  className='featureIcon' />
                 </span>
            </div>
            <span className="featureDiscribe">Compared to last month</span>
        </div>

        {/* -------- */}

        <div className="featuresItem">
            <span className="featureTitle">Revanue</span>
            <div className="featuresContainer">
                 <span className="featuresFirst">$4,415</span>
                 <span className="featuresSecond">
                 <span>-4.8</span>
                 <ArrowDownwardIcon  className='featureIcon' />
                 </span>
            </div>
            <span className="featureDiscribe">Compared to last month</span>
        </div>

        {/* --------- */}

        <div className="featuresItem">
            <span className="featureTitle">Revanue</span>
            <div className="featuresContainer">
                 <span className="featuresFirst">$1,415</span>
                 <span className="featuresSecond">
                 <span>21.4</span>
                 <ArrowUpwardIcon  className='featureIcon' />
                 </span>
            </div>
            <span className="featureDiscribe">Compared to last month</span>
        </div>
    </div>

  )
}
