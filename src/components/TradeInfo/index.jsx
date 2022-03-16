import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function TradeInfo({redExp, blueExp, fairness}){

  const data = [
    { name: 'Blue Team', value: blueExp, fill: '#A0C6FF' },
    { name: 'Red Team', value: redExp, fill: '#FFBDBD' },
  ]

  return(
    <div id="trade-info">
    <h1>Trade Info oi</h1>
    {fairness <= 40 ? "Fair Trade" : "Unfair Trade"}
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
    <span>The trade is calculated by the base experience of each pokémon.</span>
    </div>
  )
}

export default TradeInfo;