let _slider = {
  show(id: string) {
    let slide = document.querySelector(id);
    let next = <HTMLElement>slide?.querySelector(".next");
    let prev = <HTMLElement>slide?.querySelector(".prev");
    //let _Items: any;
    let longitud = 0;
    let widthItems = 0;
    let index = 0;
    let lengthSlider = 0;
    let slidemov = 0;
    let move = 0;

    if (slide instanceof HTMLElement) {
      longitud = slide.offsetWidth;

      widthItems = longitud / 3;
      slidemov = longitud / 3;
      widthItems = widthItems - 10;
      let _items = slide.querySelectorAll(".item-slider");

      lengthSlider = slide.querySelectorAll(".item-slider").length;
      let _tmpLast = <HTMLElement>_items[lengthSlider - 1].cloneNode(true);
      _tmpLast.classList.add("clone");
      let _tmpfirst = <HTMLElement>_items[0].cloneNode(true);
      _tmpfirst.classList.add("clone");
      let _innderSlider = slide?.querySelector(".innder-slider");
      if (_innderSlider instanceof HTMLElement) {
        _innderSlider.insertBefore(_tmpLast, _innderSlider.childNodes[0]);
        _innderSlider.appendChild(_tmpfirst);
        _tmpLast = <HTMLElement>_items[lengthSlider - 2].cloneNode(true);
        _tmpLast.classList.add("clone");
        _tmpfirst = <HTMLElement>_items[1].cloneNode(true);
        _tmpfirst.classList.add("clone");
        _innderSlider.insertBefore(_tmpLast, _innderSlider.childNodes[0]);
        _innderSlider.appendChild(_tmpfirst);

        index = 2;
        move = slidemov * -2;
        let _txt = `translateX(${move}px)`;
        _innderSlider.style.transform = _txt;
      }
      lengthSlider = slide.querySelectorAll(".item-slider").length - 1;

      slide.querySelectorAll(".item-slider").forEach((item: any) => {
        item.style.width = widthItems + "px";
        item.style.marginRight = "5px";
        item.style.marginLeft = "5px";
      });

      //----
      next.onclick= () => {
        let innderSlider = slide?.querySelector(".innder-slider");

        if (innderSlider instanceof HTMLElement) {
          if (index === lengthSlider - 2) {
            index = 1;
            move = slidemov * index * -1;
            let _txt = `translateX(${move}px)`;
            innderSlider.style.transform = _txt;
          }

          move = move - slidemov;
          let txt = `translateX(${move}px)`;
          setTimeout(() => {
            if (innderSlider instanceof HTMLElement) {
              innderSlider.style.transition = "all 0.25s ease 0s";
              innderSlider.style.transform = txt;
            }
          }, 10);

          setTimeout(() => {
            if (innderSlider instanceof HTMLElement) {
              innderSlider.style.transition = "";
            }
          }, 250);
          index++;
        }
      };
      prev.onclick= () => {
        let innderSlider = slide?.querySelector(".innder-slider");

        if (innderSlider instanceof HTMLElement) {
          if (index === 0) {
            index = lengthSlider - 3;
            move = slidemov * index * -1;
            let _txt = `translateX(${move}px)`;
            innderSlider.style.transform = _txt;
          }

          move = move + slidemov;
          let txt = `translateX(${move}px)`;
          setTimeout(() => {
            if (innderSlider instanceof HTMLElement) {
              innderSlider.style.transition = "all 0.25s ease 0s";
              innderSlider.style.transform = txt;
            }
          }, 10);

          setTimeout(() => {
            if (innderSlider instanceof HTMLElement) {
              innderSlider.style.transition = "";
            }
          }, 250);
          index--;
        }
      };
    }
  },
};
