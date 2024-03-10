import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import "./Chart.css"
export default function Chart({title , dataKey , grid , data}) {
  return (
    <div className="chart">
    <h3 className='chartTitle'>{title}</h3>
    <ResponsiveContainer width="90%" aspect={4}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke='#5550bd' />
            <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
            <Tooltip />
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
        </LineChart>
    </ResponsiveContainer>
</div>
  )
}
