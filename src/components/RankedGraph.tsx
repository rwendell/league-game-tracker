import { onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js";
import { Line } from "solid-chartjs";

export const RankedGraph = (props) => {
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
  });

  const chartData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "LP Progress",
        data: props.data,
      },
    ],
  };
  const chartOptions = {
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} width={200} height={100} />
    </div>
  );
};
