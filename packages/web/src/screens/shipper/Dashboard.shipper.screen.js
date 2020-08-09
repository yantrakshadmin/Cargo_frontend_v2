import React from 'react';
import { LineChart, Line, AreaChart, Area } from 'recharts';
import { Typography, Row, Col } from 'antd';

const { Text } = Typography;

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 450, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 325, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 350, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 400, pv: 2400, amt: 2400 },
];
const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DashboardShipperScreen = () => {
  return (
    <Row>
      <Col>
        <div className='chart-container bg-chart1'>
          <LineChart width={250} height={125} data={data}>
            <Line type='monotone' dataKey='uv' stroke='#a8ddec' />
          </LineChart>
          <div className='chart-content'>
            <Text style={{ color: '#fff', fontSize: 17 }}>
              Total Orders
              0
            </Text>
          </div>
        </div>
      </Col>
      <Col>
        <div className='bg-chart2 chart-container'>
          <AreaChart width={250} height={125} data={data2}>
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
            <Area
              type='monotone'
              dataKey='pv'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
          <div className='chart-content'>
            <Text style={{ color: '#fff', fontSize: 17 }}>
              Total Trucks
              0
            </Text>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardShipperScreen;
