import {
  ColumnDef,
  createSolidTable,
  getCoreRowModel,
} from "@tanstack/solid-table";
import { For, createSignal } from "solid-js";
import { useRouteData } from "solid-start";
import { routeData } from "~/routes/summoners/[region]/[summonerName]";

const defaultColumns: ColumnDef<any>[] = [
  {
    accessorKey: "gameId",
    cell: (info) => {
      return info.getValue();
    },
  },
];

export const ItemsContainer = () => {
  const summonerData = useRouteData<typeof routeData>();
  const [data, setData] = createSignal(summonerData()?.matchList);

  const table = createSolidTable({
    get data() {
      return data();
    },
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <tbody>
        <tr>
          <td>item 1</td>
          <td>item 2</td>
          <td>item 3</td>
        </tr>
        <tr>
          <td>item 4</td>
          <td>item 5</td>
          <td>item 6</td>
        </tr>
      </tbody>
    </table>
  );
};
