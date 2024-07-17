#!/usr/bin/env node

import inquirer from "inquirer";

const sleep = async (ms: number = 2) => {
  await new Promise((r) => {
    setTimeout(r, (ms * 1000) + 50);
  });
};

async function countdown(targetTime: number) {
  console.log(Math.round(targetTime / 1000 - new Date().getTime() / 1000));

  let timer = setInterval(() => {
    console.log(Math.abs(Math.round(targetTime / 1000 - new Date().getTime() / 1000)));

    if (targetTime - new Date().getTime() < -1) {
      console.log("Timer End");
      clearInterval(timer);
    }
  }, 1000);

  await sleep((Math.round(targetTime / 1000 - new Date().getTime() / 1000)));
}

while (true) {
  let timer = await inquirer.prompt([
    {
      name: "seconds",
      type: "number",
      message: "Enter the time in seconds:",
    },
  ]);

  let seconds = new Date().setSeconds(new Date().getSeconds() + timer.seconds);

  await countdown(seconds);
}