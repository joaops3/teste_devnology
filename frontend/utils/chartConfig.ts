import { ApexOptions,  } from "apexcharts";
import {theme} from "@chakra-ui/react"

export const options: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", colors: [theme.colors.green[300]], },
  tooltip: { enabled: false },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[800],
    },
    axisTicks: {
      color: theme.colors.gray[800],
    },
    categories: [
      "2022-6-1T:00:00.000Z",
      "2022-7-1T:00:00.000Z",
      "2022-8-1T:00:00.000Z",
      "2022-9-1T:00:00.000Z",
      "2022-10-1T:00:00.000Z",
      "2022-11-1T:00:00.000Z",
      "2022-12-1T:00:00.000Z",
    ],
  },
  fill: {colors: [theme.colors.green[500]],
    opacity: 0.3,
   // gradient: { shade: "dark", opacityFrom: 0.7, opacityTo: 0.7,  },
  },
};

