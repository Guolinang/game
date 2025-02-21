import {
  RpgPlayer,
  type RpgPlayerHooks,
  Control,
  Components,
  Presets,
} from "@rpgjs/server";

export async function refreshParams(player: RpgPlayer) {
  let response = await fetch("http://localhost:8000/character", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVkQXQiOjE3NDI2NTg0NzQsInVzZXJpZCI6IjcifQ.dB2K_ITZjxcvd_QGntsd4Bbfpm9d_WRVgk_EHqHI7j0",
    },
  });

  if (response.ok) {
    let res = await response.json();
    player.setVariable("wisdom", res.wis);
    player.setVariable("strength", res.str);
    player.setVariable("constitution", res.cnst);
    player.setVariable("charisma", res.char);
    player.setVariable("intelligence", res.int);
    player.setVariable("maxhp", res.maxhp);
    player.setVariable("maxexp", res.maxexp);
  }
}

export async function createTask(task) {
  let response = await fetch("http://localhost:8000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVkQXQiOjE3NDI2NTg0NzQsInVzZXJpZCI6IjcifQ.dB2K_ITZjxcvd_QGntsd4Bbfpm9d_WRVgk_EHqHI7j0",
    },
    body: JSON.stringify({
      name: task.name,
      s_desc: task.s_desc,
      type: task.type,
      stat: task.stat,
      difficulty: task.difficulty,
      urgency: task.urgency,
      repeat: task.repeat,
      subtask: task.subtask,
      l_desc: task.l_desc,
      important: task.important,
      done: false,
    }),
  });
}
