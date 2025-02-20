import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "HM_2",
  hitbox: {
    width: 100,
    height: 10,
  },
})
export default class DoorMainOutEvent extends RpgEvent {
  onInit() {}
  async onAction(player: RpgPlayer) {
    player.changeMap("simplemap", { x: 463, y: 392 });
  }
}
