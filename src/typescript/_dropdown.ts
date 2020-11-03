let _dropDown = {
  init() {
    document.querySelectorAll(".dropdown-toggle").forEach((item: any) => {
      item.onclick= function (evt: Event) {
        let _itm = <HTMLInputElement>evt.target;
        let drpdwn = `[aria-labelledby="${_itm.id}"]`;
        document.querySelector(drpdwn)?.classList.toggle("block-menu");
      };
    });
    document.querySelectorAll(".dropdown-hover").forEach((item: any) => {
      item.onmouseenter= function (evt: Event) {
        let _itm = <HTMLInputElement>evt.target;
        let drpdwn = `[aria-labelledby="${_itm.id}"]`;
        let _drpdwn =<HTMLElement>document.querySelector(drpdwn);
        _drpdwn.classList.add("block-menu");
        _drpdwn.onmouseleave= function (event: Event) {
            let _itms = <HTMLInputElement>event.target;
            _itms.classList.remove("block-menu");
          };
      };
    });
    document.querySelectorAll(".dropdown-item").forEach((item: any) => {
      item.onclick= function (evt: Event) {
        let _itm = <HTMLInputElement>evt.target;
        _itm = <HTMLInputElement>_itm.parentNode;
        _itm = <HTMLInputElement>_itm.parentNode;
        _itm.classList.remove("block-menu");
      };
    });
  },
};
