import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "SS_2",
  hitbox: {
    width: 100,
    height: 10,
  },
})
export default class DoorShopOutEvent extends RpgEvent {
  onInit() {}
  async onAction(player: RpgPlayer) {
    player.changeMap("a4", { x: 1039, y: 391 });
  }
}
