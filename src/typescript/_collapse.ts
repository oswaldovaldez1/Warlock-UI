let _Collapse = {
  init() {    
    // document.querySelectorAll(".collapse").forEach((_collps: any) => {
      
    //   if(_collps.className.indexOf("navbar-collapse")<0){
    //     let _max=_collps.offsetHeight + "px";
    //     _collps.style.maxHeight = _max;
    //     _collps.style.height = "0px";
    //   }
    // });
    document
      .querySelectorAll('[data-toggle="collapse"]')
      .forEach((btn: any) => {
  if(btn.className.indexOf("navbar-toggler")<0){        
    let id = "#" + btn.getAttribute("aria-controls");
          let _collap = <HTMLElement>document.querySelector(id);
          _collap.style.height = "0px";
        btn.onclick= function (evt: Event) {
          let _btn = <HTMLInputElement>evt.target;
          _btn.disabled = true;
          let _id = "#" + _btn.getAttribute("aria-controls");
          let _collaps = document.querySelector(_id);
          if (_collaps instanceof HTMLElement) {
            //_collaps.style.removeProperty("height");

            //let altura = _collaps.style.maxHeight;
            _collaps.classList.toggle("show");
            
            
            if (_collaps.className.indexOf("show") > 0) {
              
              _collaps.style.transition = "height 0.25s ease-in";
              //_collaps.style.height = altura;
              _collaps.style.removeProperty("height");
              
            } else {
              
              _collaps.style.transition = "height 0.15s ease-out";
              _collaps.style.height = "0px";
              
            }
          }
          setTimeout(() => {
            
            _btn.disabled = false;
          }, 500);
        };
      }
      });
  },
};
