import {
  RpgPlayer,
  type RpgPlayerHooks,
  Control,
  Components,
  Presets,
} from "@rpgjs/server";

import { refreshParams } from "./utils/utils";

const player: RpgPlayerHooks = {
  onConnected(player: RpgPlayer) {
    player.getParamValue;
    player.initialLevel = 1;
    player.hp = 100;
    player.exp = 0;
    player.name = "YourName";
    player.setComponentsTop(Components.text("{name}"));
    player.setVariable("wisdom", 0);
    player.setVariable("strength", 0);
    player.setVariable("constitution", 0);
    player.setVariable("intelligence", 0);
    player.setVariable("charisma", 0);
    player.setVariable("maxhp", 0);
    player.setVariable("maxexp", 0);
    refreshParams(player);
  },
  onInput(player: RpgPlayer, { input }) {
    if (input == Control.Back) {
      player.callMainMenu();
    }
  },
  async onJoinMap(player: RpgPlayer) {
    if (player.getVariable("AFTER_INTRO")) {
      return;
    }
    player.setVariable("AFTER_INTRO", true);
  },
};

export default player;
