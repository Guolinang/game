import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "ROCK",
  hitbox: {
    width: 40,
    height: 40,
  },
})
export default class RockBlockEvent extends RpgEvent {
  onInit() {
    this.setGraphic("rock");
  }
  async onAction(player: RpgPlayer) {
    await player.showText(
      "Очень тяжелый камень перекрывает вам путь. Вы не хватает СИЛЫ, чтобы сдвинуть его."
    );
  }
}
