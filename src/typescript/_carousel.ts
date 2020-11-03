let _Carousel = {
  init() {
    document.querySelectorAll(".carousel").forEach((carousel: any) => {
      carousel.querySelectorAll(".carousel-item").forEach((items: any) => {
        items.style.display = "none";
      });
      carousel.querySelector(".carousel-item.active").style.display = "block";
      if (carousel.className.indexOf("fade") > 0) {
        carousel.querySelector(".next").onclick= function () {
          _Carousel.plusSlideFade(carousel.id, 1);
        };
        carousel.querySelector(".prev").onclick= function () {
          _Carousel.plusSlideFade(carousel.id, -1);
        };
        setInterval(() => {
          _Carousel.plusSlideFade(carousel.id, 1);
        }, 3000);
      }
      if (carousel.className.indexOf("slide") > 0) {
        carousel.querySelector(".next").onclick= function () {
          _Carousel.plusSlideSlider(carousel.id, 1);
        };
        carousel.querySelector(".prev").onclick= function () {
          _Carousel.plusSlideSlider(carousel.id, -1);
        };
        setInterval(() => {
          _Carousel.plusSlideSlider(carousel.id, -1);
        }, 3000);
      }
    });
  },
  plusSlideSlider(id: string, plus: number) {
    let carousel = document.querySelector("#" + id);
    let index = 0;
    let items = carousel?.querySelectorAll(".carousel-item");
    let _active: any;
    let _second: any;

    carousel
      ?.querySelectorAll(".carousel-item")
      .forEach((item: any, _index: number) => {
        if (item.className.indexOf("active") > 0) {
          index = _index;
          item.classList.remove("active");
          _active = item;
          if (items instanceof NodeList) {
            if (plus > 0) {
              if (index == 0) {
                _second = items[items.length - 1];
              } else {
                _second = items[index - 1];
              }
            }
            if (plus < 0) {
              if (index === items.length - 1) {
                _second = items[0];
              } else {
                _second = items[index + 1];
              }
            }
          }
        }
      });
if(_second instanceof HTMLElement || _active instanceof HTMLElement){
  _second.style.display = "block";

    if (plus > 0) {
      _active.classList.add("left-right-1");
      _second.classList.add("left-right-2");

      setTimeout(() => {
        _active.classList.remove("left-right-1");
        _second.classList.remove("left-right-2");
        _second.classList.add("active");
        _active.style.display = "none";
      }, 600);
    }
    if (plus < 0) {
      _active.classList.add("right-left-2");
      _second.classList.add("right-left-1");

      setTimeout(() => {
        _active.classList.remove("right-left-2");
        _second.classList.remove("right-left-1");
        _second.classList.add("active");
        _active.style.display = "none";
      }, 600);
    }
  }
  },
  plusSlideFade(id: string, plus: number) {
    let carousel = document.querySelector("#" + id);
    let index = 0;
    let items = carousel?.querySelectorAll(".carousel-item");

    carousel
      ?.querySelectorAll(".carousel-item")
      .forEach((item: any, _index: number) => {
        if (item.className.indexOf("active") > 0) {
          item.classList.remove("active");
          item.style.display = "none";
          index = _index;
        }
      });
    index = index + plus;

    if (items instanceof NodeList) {
      if (index == -1) {
        index = items.length - 1;
      }
      if (index >= items.length) {
        index = 0;
      }

      items[index].classList.add("active");
      let _itm = items[index];
      if (_itm instanceof HTMLElement) _itm.style.display = "block";
    }
  },
};
