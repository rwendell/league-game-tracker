import { TextField } from "@kobalte/core";
import { IconNumberBox } from "./IconNumberBox";
import { ItemsContainer } from "./ItemsContainer";

export const GameInfo = (props) => {
  return (
    <div class="flex-inline items-center [&>*]:m-2">
      <IconNumberBox imageId={props.imageId} />
      <div class="max-h-100px">
        <h2 class="m-2 max-h-50%">Rank Division Placeholder</h2>
        <div class="border-style-dashed max-h-50%">
          {/* TODO conditionally format red/green based on win/loss */}
          <h2 class="m-2">+/- 10LP (Placeholder)</h2>
        </div>
      </div>
      <ul class="list-none ps-none">
        <li>KDA</li>
        <li>Vision Data</li>
        <li>Farm/GPM</li>
      </ul>
      <ItemsContainer />
      <TextField.Root>
        <TextField.TextArea> I did good (Placeholder) </TextField.TextArea>
      </TextField.Root>
    </div>
  );
};
