let _navBar = {
  init() {
    document.querySelectorAll(".navbar-toggler").forEach((item: any) => {
      
      item.onclick= function (evt: Event) {
        let btn = <HTMLInputElement>evt.target;
        let _target = btn.dataset.target;
        if (typeof _target === "string") {
          let collapse = document.querySelector(_target);
          collapse?.classList.toggle("collapse-block");
        }
        
      };
    });
  },
};
