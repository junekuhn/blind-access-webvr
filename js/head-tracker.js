import Thingy from "./Thingy.js";
const thingy = new Thingy({logEnabled: true});
const myLogger = data => {
  const tempData = data.detail;
  console.log(tempData);
}
async function start(device) {
  try {
    await device.connect();
    thingy.addEventListener("heading", callback);
    await thingy.heading.start();
    await device.led.write({
      mode: "breathe",
      color: "red",
      intensity: 50,
      delay: 1000,
    });
  } catch (error) {
    console.error(error);
  }
}

var callback = x => {
  document.querySelector('#eRangeAzimuth').setAttribute('value', x.detail.heading - 180);
}

document.addEventListener("click", async () => {
  start(thingy);
});
