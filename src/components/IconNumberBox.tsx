import { Image } from "@kobalte/core";

export const IconNumberBox = (props) => {
  return (
    <div class="relative h-100px w-100px">
      <Image.Root>
        <Image.Img
          class="max-h-100% max-w-100% rounded"
          src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${props.imageId}.png`}
        />
        <Image.Fallback class="inline-block h-100px w-100px rounded border-style-dashed" />
      </Image.Root>
      <span class="absolute bottom-0 right-0 color-white">{props.level}</span>
    </div>
  );
};
