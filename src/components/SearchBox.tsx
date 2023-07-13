import { TextField } from "@kobalte/core";
import { Button } from "@kobalte/core";
import { createSignal } from "solid-js";
import { useNavigate } from "solid-start";

export const SearchBox = () => {
  const navigate = useNavigate();
  const [summonerName, setSummonerName] = createSignal("");

  return (
    <div class="flex">
      <TextField.Root>
        <TextField.Input
          value={summonerName()}
          onchange={(event) => setSummonerName(event.target.value)}
        />
      </TextField.Root>
      <Button.Root
        onClick={() => navigate(`/summoners/na/${summonerName()}`)}
      />
    </div>
  );
};
