let _bars = {
  init() {
    document.querySelectorAll(".bar").forEach((item: any) => {
      let value = 0;
      if (
        typeof item.dataset.value === "undefined" ||
        isNaN(item.dataset.value)
      )
        value = 0;
      else value = parseInt(item.dataset.value);

      item.style.setProperty("--content", `"${value}%"`);
      item.style.setProperty("--width", `${value}%`);
      item.dataset.value = value;
    });
    //_bars.setIntervals();
  },
  setValue(element: string, value: number) {
    let elem = <HTMLInputElement>document.querySelector(element);
    elem.style.setProperty("--content", `"${value}%"`);
    elem.style.setProperty("--width", `${value}%`);
    elem.dataset.value = `${value}`;
  },
  setIntervalsCircle() {
    document.querySelectorAll(".progress-circle").forEach((item: any) => {
      let x = 0;
      //let interval = Math.random() * 200;
      setInterval(() => {
        //console.log(item.className, item.classList);
        item.className = _bars.deleteClassValue(item.className);
        //item.classList.add("progress-circle");
        if (x >= 50) {
          item.classList.add("over50");
        } else {
          item.classList.remove("over50");
        }
        item.classList.add(`p${x}`);
        x++;
        if (x > 100) {
          x = 0;
        }
      }, 100);
    });
  },
  deleteClassValue(value: string) {
    for (let x = 100; x >= 0; x--) {
      let classSearch = `p${x}`;
      value = value.replace(classSearch, "");
    }
    return value;
  },
  setIntervals() {
    document.querySelectorAll(".bar").forEach((item: any) => {
      let index = 0;
      let interval = Math.random() * 200;
      setInterval(() => {
        item.style.setProperty("--content", `"${index}%"`);
        item.style.setProperty("--width", `${index}%`);
        item.dataset.value = index;
        index = index + 1;
        if (index > 100) {
          index = 0;
        }
      }, interval);
    });
  },
};
