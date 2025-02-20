import { Spritesheet, Presets } from "@rpgjs/client";

const { RMSpritesheet } = Presets;

@Spritesheet({
  ...RMSpritesheet(1, 1),
})
export default class Rock {}
