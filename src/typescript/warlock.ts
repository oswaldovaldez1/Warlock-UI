/*!
 * Autor: Warlock
 * Desc
 */

let Oz = {
  Alert: _Notifications,
  Bars: _bars,
  Carousel: _Carousel,
  Collapse: _Collapse,
  DropDown: _dropDown,
  Forms: _Form,
  Modal: _Modal,
  NavBar: _navBar,
  SideNav: _sideNav,
  ToolTip: _toolTip,
  Slider: _slider,
  init: () => {
    console.log("🧙‍♂ Alakazam 🧚✨...");

    Oz.Forms.init();
    Oz.Bars.init();
    Oz.NavBar.init();
    Oz.DropDown.init();
    Oz.Modal.init();
    Oz.SideNav.init();
    Oz.ToolTip.init();
    Oz.Collapse.init();
    Oz.Carousel.init();
  },
};
