import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import "./single.scss";
import { Tooltip } from "@mui/material";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

type Props = {
	id: number;
	img?: string;
	title: string;
	info: object;
	chart: {
		dataKeys: { name: string; color: string }[];
		data: object[];
	};
	activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
	return (
		<div className="single">
			<div className="view">
				<div className="info">
					<div className="topInfo">
						<img
							src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
						{props.img && <img src={props.img} alt="" />}
						<h1>{props.title}</h1>
						<button>Udpdate</button>
					</div>

					<div className="details">
						{Object.entries(props.info).map((item) => (
							<div className="item" key={item[0]}>
								<span className="itemTitle">{item[0]}</span>
								<span className="itemValue">{item[1]}</span>
							</div>
						))}
					</div>
				</div>
				<hr />
				<div className="chart">
					{props.chart && (
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								width={500}
								height={300}
								data={props.chart.data}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}
							>
								<XAxis dataKey="name" />
								<YAxis />
								{/* <Tooltip /> */}
								<Legend />
								{props.chart.dataKeys.map((dataKey) => (
									<Line
										type="monotone"
										dataKey={dataKey.name}
										stroke={dataKey.color}
									/>
								))}
							</LineChart>
						</ResponsiveContainer>
					)}
				</div>
			</div>
			<div className="activities">
				<h2>Activities</h2>
				{props.activities && (
					<ul>
						{props.activities.map((activity) => (
							<li key={activity.text}>
								<div>
									<p>{activity.text}</p>
									<time>{activity.time}</time>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Single;
