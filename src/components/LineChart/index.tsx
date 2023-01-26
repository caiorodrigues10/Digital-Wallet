// import { useTheme } from "@nextui-org/react";
import {
  CartesianGrid,
  Line,
  LineChart as ChartLine,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export interface DataProps {
  name: string;
  uv: number;
  pv?: number;
  amt?: number;
}

interface LineChartProps {
  data: DataProps[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // const { isDark } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ChartLine
        width={550}
        height={250}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <defs>
          <linearGradient id="colorUv">
            <stop offset="5%" stopColor={"#030DFF"} />
            <stop offset="95%" stopColor={"#FF03E6"} />
          </linearGradient>
          <linearGradient id="colorPv">
            <stop offset="5%" stopColor="rgba(0, 147, 11, 1)" />
            <stop offset="95%" stopColor="#009379" />
          </linearGradient>
          <linearGradient id="colorAmt">
            <stop offset="5%" stopColor="#009379" />
            <stop offset="95%" stopColor="rgba(0, 147, 121, 0.2)" />
          </linearGradient>
        </defs>

        <Line
          type="monotone"
          dataKey="uv"
          dot={false}
          stroke="url(#colorUv)"
          width={4}
        />
        <Line type="monotone" dataKey="pv" dot={false} stroke="url(#colorPv)" />
        <Line
          type="monotone"
          dataKey="amt"
          dot={false}
          stroke="url(#colorAmt)"
        />

        <CartesianGrid stroke={"#c0c0c0"} strokeDasharray="0" opacity="0.3" />
        <XAxis dataKey="name" stroke={"#000"} fontSize="10px" />
        <YAxis stroke={"#000"} fontSize="12px" />
        <Tooltip />
      </ChartLine>
    </ResponsiveContainer>
  );
};

export default LineChart;
