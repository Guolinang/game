import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "SS_1",
  hitbox: {
    width: 100,
    height: 10,
  },
})
export default class DoorShopInEvent extends RpgEvent {
  onInit() {}
  async onAction(player: RpgPlayer) {
    player.changeMap("ad", { x: 112, y: 73 });
  }
}
