let _Chip = {
  init() {
    document.querySelectorAll("a.chip-close").forEach((item:any) => {
      item.onclick= (evt: Event) => {
        let itm = <HTMLInputElement>evt.target;
        itm.parentElement?.remove();
      };
    });
  },
};
