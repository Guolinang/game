import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";
import { createTask } from "../utils/utils";

@EventData({
  name: "EV-1",
  hitbox: {
    width: 32,
    height: 16,
  },
})
export default class VillagerEvent extends RpgEvent {
  onInit() {
    this.setGraphic("female");
  }
  async onAction(player: RpgPlayer) {
    await player.showText("Привет!", {
      talkWith: this,
    });
    await player.showText("Ты можешь помочь мне помыть посуду?", {
      talkWith: this,
    });
    await createTask({
      name: "Помой посуду",
      s_desc: "Вас попросили помочь помыть посуду",
      type: "Уборка",
      stat: "str",
      difficulty: 1,
      urgency: new Date(),
      repeat: "1111111",
      subtask: "помогите",
      l_desc: "пожалуйста",
      important: true,
    });
  }
}
