let _sideNav = {
  init() {
    document.querySelectorAll(".btn-sidenav").forEach((btn: any) => {
      btn.onclick= function (evt: Event) {
        let _btn = <HTMLInputElement>evt.target;

        if (typeof _btn.dataset.target === "string") {
          let _sidenav: any = document.querySelector(_btn.dataset.target);
          _sidenav.style.transform = "translateX(0px)";
        }
      };
    });
    document.querySelectorAll(".btn-close-side").forEach((btn: any) => {
      btn.onclick= function (evt: Event) {
        let close = <HTMLInputElement>evt.target;
        let _side = <HTMLInputElement>close.parentNode;
        _side.removeAttribute("style");
      };
    });
  },
  show(id: string) {
    let _sidenav: any = document.querySelector(id);
    _sidenav.style.transform = "translateX(0px)";
  },
  close(id: string) {
    let _sidenav: any = document.querySelector(id);
    _sidenav.removeAttribute("style");
  },
};
