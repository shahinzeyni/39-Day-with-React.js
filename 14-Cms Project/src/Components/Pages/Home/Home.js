import React from 'react'
import Features from '../../Features/Features'
import Chart from '../../Chart/Chart';
import WidgitSm from '../../WidgitSm/WidgitSm';
import WidgetLg from '../../WidgetLg/WidgetLg';
import { xAxisData } from '../../../datas';
import "./Home.css";
export default function Home() {
  return (
    <>

      <div className="container-Home">

        <Features  />
        <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"  />
        <div className="widgitSm">
          <WidgitSm />
          <WidgetLg/>
        </div>
      </div>

    </>

  )
}
