import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Title } from "./style";

function TradeInfo({redExp, blueExp, fairness}){

  const data = [
    { name: 'Blue Team', value: blueExp, fill: '#A0C6FF' },
    { name: 'Red Team', value: redExp, fill: '#FFBDBD' },
  ]

  return(
    <div id="trade-info">
    <Title>Trade Info</Title>
    <ResponsiveContainer width="100%" aspect={5}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={60}
          fill="#8884d8"
          label
        />
      </PieChart>
    </ResponsiveContainer>
    {<div>The trade is {fairness <= 40 ? (<span style={{color: "lightgreen", fontWeight: "500"}}>Fair.</span>) : (<span style={{color: "red", fontWeight: "500"}}>Unfair.</span>)}</div>}
    <br></br>
    <div style={{fontWeight: "500"}}>How is it calculated?</div>
    <br></br>
    <span>Each pokemon has it base experience.  Calculating the total base experience of the teams, we can have a idea of the strongness. By defining 
a threshold, it's possible to judge the disparity between the two sides. In the moment, the value of the threshold is 20.</span>
    </div>
  )
}

export default TradeInfo;