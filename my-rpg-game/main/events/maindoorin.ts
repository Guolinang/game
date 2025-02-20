import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "HM_1",
  hitbox: {
    width: 100,
    height: 10,
  },
})
export default class DoorMainInEvent extends RpgEvent {
  onInit() {}
  async onAction(player: RpgPlayer) {
    player.changeMap("house", { x: 192, y: 344 });
  }
}
