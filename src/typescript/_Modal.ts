let _Modal = {
  init() {
    document.querySelectorAll(".modal").forEach((modal: any) => {
      modal.classList.remove("show");
    });
    document.querySelectorAll('[data-toggle="modal"]').forEach((btn: any) => {
      btn.onclick= function (evt: Event) {
        let _btn = <HTMLInputElement>evt.target;
        let _id = _btn.dataset.target;
        if (typeof _id === "string") {
          document.querySelector(_id)?.classList.add("show");
        }
      };
    });
    document.querySelectorAll(".btn-close").forEach((btn: any) => {
      btn.onclick= function (evt: Event) {
        let _btn = <HTMLInputElement>evt.target;

        let _modal = <HTMLInputElement>_btn.parentNode;

        _modal = <HTMLInputElement>_modal.parentNode;

        _modal = <HTMLInputElement>_modal.parentNode;

        _modal = <HTMLInputElement>_modal.parentNode;

        _modal.classList.remove("show");
      };
    });
  },
  show(id: string) {
    document.querySelector(id)?.classList.add("show");
  },
  close(id: string) {
    document.querySelector(id)?.classList.remove("show");
  },
};
