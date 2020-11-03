"use strict";
var _Notifications = {
    show: function (text, config) {
        var _this = this;
        var timeOut = typeof config.timeOut === "number" ? config.timeOut : 3000;
        var id = "_" + Math.random().toString(36).substr(2, 9);
        var alerts = document.createElement("div");
        var span = document.createElement("span");
        var close = document.createElement("span");
        var sum = 0;
        close.classList.add("closeAlert");
        close.classList.add("fas");
        close.classList.add("fa-times");
        close.classList.add("pl-8");
        span.innerHTML = text;
        alerts.id = id;
        if (typeof config.classIcon === "string" && config.classIcon.length > 0) {
            var spanIcon_1 = document.createElement("span");
            var classNames = config.classIcon.split(" ");
            classNames.forEach(function (element) {
                spanIcon_1.classList.add(element);
            });
            spanIcon_1.classList.add("px-2");
            alerts.appendChild(spanIcon_1);
        }
        if (typeof config.position === "undefined" ||
            (typeof config.position === "string" && config.position.length === 0)) {
            config.position = "topRight";
        }
        var _self = this;
        close.onclick = function (evt) {
            var removeChild = document.querySelector("#" + id);
            document.body.removeChild(removeChild);
            setTimeout(function () {
                _self.changePosition(config.position);
            }, 100);
        };
        alerts.appendChild(span);
        alerts.appendChild(close);
        alerts.classList.add("alert");
        alerts.classList.add(config.className);
        alerts.setAttribute("role", config.position);
        alerts.style.position = "fixed";
        var count = document.querySelectorAll("[role=\"" + config.position + "\"]");
        count.forEach(function (element) {
            if (element instanceof HTMLElement) {
                sum += element.offsetHeight;
            }
        });
        switch (config.position) {
            case "topLeft": {
                var top_1 = 0;
                top_1 = sum + (count.length + 1) * 10;
                alerts.style.top = top_1 + "px";
                alerts.style.left = "10px";
                break;
            }
            case "bottomRight": {
                var bottom = 0;
                bottom = sum + (count.length + 1) * 10;
                alerts.style.bottom = bottom + "px";
                alerts.style.right = "10px";
                break;
            }
            case "bottomLeft": {
                var bottom = 0;
                bottom = sum + (count.length + 1) * 10;
                alerts.style.bottom = bottom + "px";
                alerts.style.left = "10px";
                break;
            }
            default: {
                var top_2 = 0;
                top_2 = sum + (count.length + 1) * 10;
                alerts.style.top = top_2 + "px";
                alerts.style.right = "10px";
                break;
            }
        }
        document.body.appendChild(alerts);
        setTimeout(function () {
            try {
                document.body.removeChild(alerts);
            }
            catch (e) { }
            _this.changePosition(config.position);
        }, timeOut + ((count.length + 1) * 1000));
    },
    changePosition: function (position) {
        var count = document.querySelectorAll("[role=\"" + position + "\"]");
        var sum = 0;
        var cont = 0;
        count.forEach(function (element) {
            if (element instanceof HTMLElement) {
                sum = element.offsetHeight * cont;
                switch (position) {
                    case "topLeft": {
                        var top_3 = 0;
                        top_3 = sum + (((cont + 1) * 10));
                        element.style.top = top_3 + "px";
                        break;
                    }
                    case "bottomRight": {
                        var bottom = 0;
                        bottom = sum + (((cont + 1) * 10));
                        element.style.bottom = bottom + "px";
                        break;
                    }
                    case "bottomLeft": {
                        var bottom = 0;
                        bottom = sum + (((cont + 1) * 10));
                        element.style.bottom = bottom + "px";
                        break;
                    }
                    default: {
                        var top_4 = 0;
                        top_4 = sum + (((cont + 1) * 10));
                        element.style.top = top_4 + "px";
                        break;
                    }
                }
            }
            cont = cont + 1;
        });
    }
};
var _bars = {
    init: function () {
        document.querySelectorAll(".bar").forEach(function (item) {
            var value = 0;
            if (typeof item.dataset.value === "undefined" ||
                isNaN(item.dataset.value))
                value = 0;
            else
                value = parseInt(item.dataset.value);
            item.style.setProperty("--content", "\"" + value + "%\"");
            item.style.setProperty("--width", value + "%");
            item.dataset.value = value;
        });
    },
    setValue: function (element, value) {
        var elem = document.querySelector(element);
        elem.style.setProperty("--content", "\"" + value + "%\"");
        elem.style.setProperty("--width", value + "%");
        elem.dataset.value = "" + value;
    },
    setIntervalsCircle: function () {
        document.querySelectorAll(".progress-circle").forEach(function (item) {
            var x = 0;
            setInterval(function () {
                item.className = _bars.deleteClassValue(item.className);
                if (x >= 50) {
                    item.classList.add("over50");
                }
                else {
                    item.classList.remove("over50");
                }
                item.classList.add("p" + x);
                x++;
                if (x > 100) {
                    x = 0;
                }
            }, 100);
        });
    },
    deleteClassValue: function (value) {
        for (var x = 100; x >= 0; x--) {
            var classSearch = "p" + x;
            value = value.replace(classSearch, "");
        }
        return value;
    },
    setIntervals: function () {
        document.querySelectorAll(".bar").forEach(function (item) {
            var index = 0;
            var interval = Math.random() * 200;
            setInterval(function () {
                item.style.setProperty("--content", "\"" + index + "%\"");
                item.style.setProperty("--width", index + "%");
                item.dataset.value = index;
                index = index + 1;
                if (index > 100) {
                    index = 0;
                }
            }, interval);
        });
    },
};
var _Chip = {
    init: function () {
        document.querySelectorAll("a.chip-close").forEach(function (item) {
            item.onclick = function (evt) {
                var _a;
                var itm = evt.target;
                (_a = itm.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            };
        });
    },
};
var _FormChecks = {
    init: function () {
    },
};
var _FormRange = {
    init: function () {
        document.querySelectorAll("input[type='range']").forEach(function (range) {
            var value = parseInt(range.value);
            range.style.setProperty("--content", "\" " + value + " \"");
            range.oninput = _FormRange.updateValue;
        });
    },
    updateValue: function (evt) {
        var range = evt.target;
        var value = parseInt(range.value);
        range.style.setProperty("--content", "\" " + value + " \"");
    },
};
var _Form = {
    FormRange: _FormRange,
    Chrips: _Chip,
    init: function () {
        document.querySelectorAll("input[type='tel']").forEach(function (tel) {
            tel.onkeypress = _Form.validateTel;
            tel.onpaste = _Form.validateTel;
            tel.onkeyup = _Form.formatTel;
        });
        document.querySelectorAll(".input-field > label").forEach(function (label) {
            _Form.upLabel(label);
        });
        document.querySelectorAll(".input-field > input").forEach(function (input) {
            var label = (document.querySelector("label[for='" + input.id + "']"));
            setInterval(function () {
                if (input.placeholder.length > 0) {
                    label.classList.add("up");
                }
                else {
                    label.classList.remove("up");
                }
            }, 1000);
        });
        _Form.FormRange.init();
        _Form.Chrips.init();
    },
    upLabel: function (label) {
        var input = (document.querySelector("#" + label.getAttribute("for")));
        input.onblur = function (evt) {
            if (input.value.length > 0) {
                label.classList.add("up");
            }
            else if (input.placeholder.length > 0) {
                label.classList.add("up");
            }
            else {
                label.classList.remove("up");
            }
        };
    },
    formatTel: function (evt) {
        var _format = evt.target.dataset.format;
        var _min = evt.target.getAttribute("min");
        var _max = evt.target.getAttribute("max");
        if (_format !== undefined && _format !== null) {
            var _expStr_1 = "";
            _format.split("-").forEach(function (element) {
                _expStr_1 = _expStr_1 + ("(\\d{" + element.length + "})");
            });
            try {
                var _exp = new RegExp(_expStr_1);
                var x = evt.target.value.replace(/\D/g, "").match(_exp);
                evt.target.value = x.slice(1, x.length).join("-");
                evt.target.classList.remove("danger");
                evt.target.classList.add("success");
            }
            catch (err) {
                evt.target.classList.add("danger");
                evt.target.classList.add("remove");
            }
        }
        if (_min !== undefined && _min !== null) {
            if (evt.target.value.length >= parseInt(_min)) {
                evt.target.classList.remove("danger");
                evt.target.classList.add("success");
            }
            else {
                evt.target.classList.add("danger");
                evt.target.classList.remove("success");
            }
        }
        if (_max !== undefined && _max !== null) {
            if (evt.target.value.length > parseInt(_max)) {
                evt.target.value = evt.target.value;
            }
        }
    },
    validateTel: function (evt) {
        var _max = evt.target.getAttribute("max");
        var theEvent = evt || window.event;
        if (theEvent.type === "paste") {
            key = evt.originalEvent.clipboardData.getData("text/plain");
        }
        else {
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
        if (_max !== undefined && _max !== null) {
            if (key.length > parseInt(_max)) {
                key = key.substr(0, parseInt(_max));
                evt.target.value = key;
                theEvent.returnValue = false;
                if (theEvent.preventDefault)
                    theEvent.preventDefault();
            }
        }
    },
};
var _Modal = {
    init: function () {
        document.querySelectorAll(".modal").forEach(function (modal) {
            modal.classList.remove("show");
        });
        document.querySelectorAll('[data-toggle="modal"]').forEach(function (btn) {
            btn.onclick = function (evt) {
                var _a;
                var _btn = evt.target;
                var _id = _btn.dataset.target;
                if (typeof _id === "string") {
                    (_a = document.querySelector(_id)) === null || _a === void 0 ? void 0 : _a.classList.add("show");
                }
            };
        });
        document.querySelectorAll(".btn-close").forEach(function (btn) {
            btn.onclick = function (evt) {
                var _btn = evt.target;
                var _modal = _btn.parentNode;
                _modal = _modal.parentNode;
                _modal = _modal.parentNode;
                _modal = _modal.parentNode;
                _modal.classList.remove("show");
            };
        });
    },
    show: function (id) {
        var _a;
        (_a = document.querySelector(id)) === null || _a === void 0 ? void 0 : _a.classList.add("show");
    },
    close: function (id) {
        var _a;
        (_a = document.querySelector(id)) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
    },
};
var _navBar = {
    init: function () {
        document.querySelectorAll(".navbar-toggler").forEach(function (item) {
            item.onclick = function (evt) {
                var btn = evt.target;
                var _target = btn.dataset.target;
                if (typeof _target === "string") {
                    var collapse = document.querySelector(_target);
                    collapse === null || collapse === void 0 ? void 0 : collapse.classList.toggle("collapse-block");
                }
            };
        });
    },
};
var _sideNav = {
    init: function () {
        document.querySelectorAll(".btn-sidenav").forEach(function (btn) {
            btn.onclick = function (evt) {
                var _btn = evt.target;
                if (typeof _btn.dataset.target === "string") {
                    var _sidenav = document.querySelector(_btn.dataset.target);
                    _sidenav.style.transform = "translateX(0px)";
                }
            };
        });
        document.querySelectorAll(".btn-close-side").forEach(function (btn) {
            btn.onclick = function (evt) {
                var close = evt.target;
                var _side = close.parentNode;
                _side.removeAttribute("style");
            };
        });
    },
    show: function (id) {
        var _sidenav = document.querySelector(id);
        _sidenav.style.transform = "translateX(0px)";
    },
    close: function (id) {
        var _sidenav = document.querySelector(id);
        _sidenav.removeAttribute("style");
    },
};
var _Carousel = {
    init: function () {
        document.querySelectorAll(".carousel").forEach(function (carousel) {
            carousel.querySelectorAll(".carousel-item").forEach(function (items) {
                items.style.display = "none";
            });
            carousel.querySelector(".carousel-item.active").style.display = "block";
            if (carousel.className.indexOf("fade") > 0) {
                carousel.querySelector(".next").onclick = function () {
                    _Carousel.plusSlideFade(carousel.id, 1);
                };
                carousel.querySelector(".prev").onclick = function () {
                    _Carousel.plusSlideFade(carousel.id, -1);
                };
                setInterval(function () {
                    _Carousel.plusSlideFade(carousel.id, 1);
                }, 3000);
            }
            if (carousel.className.indexOf("slide") > 0) {
                carousel.querySelector(".next").onclick = function () {
                    _Carousel.plusSlideSlider(carousel.id, 1);
                };
                carousel.querySelector(".prev").onclick = function () {
                    _Carousel.plusSlideSlider(carousel.id, -1);
                };
                setInterval(function () {
                    _Carousel.plusSlideSlider(carousel.id, -1);
                }, 3000);
            }
        });
    },
    plusSlideSlider: function (id, plus) {
        var carousel = document.querySelector("#" + id);
        var index = 0;
        var items = carousel === null || carousel === void 0 ? void 0 : carousel.querySelectorAll(".carousel-item");
        var _active;
        var _second;
        carousel === null || carousel === void 0 ? void 0 : carousel.querySelectorAll(".carousel-item").forEach(function (item, _index) {
            if (item.className.indexOf("active") > 0) {
                index = _index;
                item.classList.remove("active");
                _active = item;
                if (items instanceof NodeList) {
                    if (plus > 0) {
                        if (index == 0) {
                            _second = items[items.length - 1];
                        }
                        else {
                            _second = items[index - 1];
                        }
                    }
                    if (plus < 0) {
                        if (index === items.length - 1) {
                            _second = items[0];
                        }
                        else {
                            _second = items[index + 1];
                        }
                    }
                }
            }
        });
        if (_second instanceof HTMLElement || _active instanceof HTMLElement) {
            _second.style.display = "block";
            if (plus > 0) {
                _active.classList.add("left-right-1");
                _second.classList.add("left-right-2");
                setTimeout(function () {
                    _active.classList.remove("left-right-1");
                    _second.classList.remove("left-right-2");
                    _second.classList.add("active");
                    _active.style.display = "none";
                }, 600);
            }
            if (plus < 0) {
                _active.classList.add("right-left-2");
                _second.classList.add("right-left-1");
                setTimeout(function () {
                    _active.classList.remove("right-left-2");
                    _second.classList.remove("right-left-1");
                    _second.classList.add("active");
                    _active.style.display = "none";
                }, 600);
            }
        }
    },
    plusSlideFade: function (id, plus) {
        var carousel = document.querySelector("#" + id);
        var index = 0;
        var items = carousel === null || carousel === void 0 ? void 0 : carousel.querySelectorAll(".carousel-item");
        carousel === null || carousel === void 0 ? void 0 : carousel.querySelectorAll(".carousel-item").forEach(function (item, _index) {
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
            var _itm = items[index];
            if (_itm instanceof HTMLElement)
                _itm.style.display = "block";
        }
    },
};
var _Collapse = {
    init: function () {
        document
            .querySelectorAll('[data-toggle="collapse"]')
            .forEach(function (btn) {
            if (btn.className.indexOf("navbar-toggler") < 0) {
                var id = "#" + btn.getAttribute("aria-controls");
                var _collap = document.querySelector(id);
                _collap.style.height = "0px";
                btn.onclick = function (evt) {
                    var _btn = evt.target;
                    _btn.disabled = true;
                    var _id = "#" + _btn.getAttribute("aria-controls");
                    var _collaps = document.querySelector(_id);
                    if (_collaps instanceof HTMLElement) {
                        _collaps.classList.toggle("show");
                        if (_collaps.className.indexOf("show") > 0) {
                            _collaps.style.transition = "height 0.25s ease-in";
                            _collaps.style.removeProperty("height");
                        }
                        else {
                            _collaps.style.transition = "height 0.15s ease-out";
                            _collaps.style.height = "0px";
                        }
                    }
                    setTimeout(function () {
                        _btn.disabled = false;
                    }, 500);
                };
            }
        });
    },
};
var _dropDown = {
    init: function () {
        document.querySelectorAll(".dropdown-toggle").forEach(function (item) {
            item.onclick = function (evt) {
                var _a;
                var _itm = evt.target;
                var drpdwn = "[aria-labelledby=\"" + _itm.id + "\"]";
                (_a = document.querySelector(drpdwn)) === null || _a === void 0 ? void 0 : _a.classList.toggle("block-menu");
            };
        });
        document.querySelectorAll(".dropdown-hover").forEach(function (item) {
            item.onmouseenter = function (evt) {
                var _itm = evt.target;
                var drpdwn = "[aria-labelledby=\"" + _itm.id + "\"]";
                var _drpdwn = document.querySelector(drpdwn);
                _drpdwn.classList.add("block-menu");
                _drpdwn.onmouseleave = function (event) {
                    var _itms = event.target;
                    _itms.classList.remove("block-menu");
                };
            };
        });
        document.querySelectorAll(".dropdown-item").forEach(function (item) {
            item.onclick = function (evt) {
                var _itm = evt.target;
                _itm = _itm.parentNode;
                _itm = _itm.parentNode;
                _itm.classList.remove("block-menu");
            };
        });
    },
};
var _slider = {
    show: function (id) {
        var slide = document.querySelector(id);
        var next = slide === null || slide === void 0 ? void 0 : slide.querySelector(".next");
        var prev = slide === null || slide === void 0 ? void 0 : slide.querySelector(".prev");
        var longitud = 0;
        var widthItems = 0;
        var index = 0;
        var lengthSlider = 0;
        var slidemov = 0;
        var move = 0;
        if (slide instanceof HTMLElement) {
            longitud = slide.offsetWidth;
            widthItems = longitud / 3;
            slidemov = longitud / 3;
            widthItems = widthItems - 10;
            var _items = slide.querySelectorAll(".item-slider");
            lengthSlider = slide.querySelectorAll(".item-slider").length;
            var _tmpLast = _items[lengthSlider - 1].cloneNode(true);
            _tmpLast.classList.add("clone");
            var _tmpfirst = _items[0].cloneNode(true);
            _tmpfirst.classList.add("clone");
            var _innderSlider = slide === null || slide === void 0 ? void 0 : slide.querySelector(".innder-slider");
            if (_innderSlider instanceof HTMLElement) {
                _innderSlider.insertBefore(_tmpLast, _innderSlider.childNodes[0]);
                _innderSlider.appendChild(_tmpfirst);
                _tmpLast = _items[lengthSlider - 2].cloneNode(true);
                _tmpLast.classList.add("clone");
                _tmpfirst = _items[1].cloneNode(true);
                _tmpfirst.classList.add("clone");
                _innderSlider.insertBefore(_tmpLast, _innderSlider.childNodes[0]);
                _innderSlider.appendChild(_tmpfirst);
                index = 2;
                move = slidemov * -2;
                var _txt = "translateX(" + move + "px)";
                _innderSlider.style.transform = _txt;
            }
            lengthSlider = slide.querySelectorAll(".item-slider").length - 1;
            slide.querySelectorAll(".item-slider").forEach(function (item) {
                item.style.width = widthItems + "px";
                item.style.marginRight = "5px";
                item.style.marginLeft = "5px";
            });
            next.onclick = function () {
                var innderSlider = slide === null || slide === void 0 ? void 0 : slide.querySelector(".innder-slider");
                if (innderSlider instanceof HTMLElement) {
                    if (index === lengthSlider - 2) {
                        index = 1;
                        move = slidemov * index * -1;
                        var _txt = "translateX(" + move + "px)";
                        innderSlider.style.transform = _txt;
                    }
                    move = move - slidemov;
                    var txt_1 = "translateX(" + move + "px)";
                    setTimeout(function () {
                        if (innderSlider instanceof HTMLElement) {
                            innderSlider.style.transition = "all 0.25s ease 0s";
                            innderSlider.style.transform = txt_1;
                        }
                    }, 10);
                    setTimeout(function () {
                        if (innderSlider instanceof HTMLElement) {
                            innderSlider.style.transition = "";
                        }
                    }, 250);
                    index++;
                }
            };
            prev.onclick = function () {
                var innderSlider = slide === null || slide === void 0 ? void 0 : slide.querySelector(".innder-slider");
                if (innderSlider instanceof HTMLElement) {
                    if (index === 0) {
                        index = lengthSlider - 3;
                        move = slidemov * index * -1;
                        var _txt = "translateX(" + move + "px)";
                        innderSlider.style.transform = _txt;
                    }
                    move = move + slidemov;
                    var txt_2 = "translateX(" + move + "px)";
                    setTimeout(function () {
                        if (innderSlider instanceof HTMLElement) {
                            innderSlider.style.transition = "all 0.25s ease 0s";
                            innderSlider.style.transform = txt_2;
                        }
                    }, 10);
                    setTimeout(function () {
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
var _toolTip = {
    init: function () {
        document.querySelectorAll(".tooltip").forEach(function (_tool) {
            _tool.onmouseover = function (evt) {
                var _tooltp = evt.target;
                var anchoElemento = _tooltp.offsetWidth;
                var altoElemento = _tooltp.offsetHeight;
                var coordenadaXElemento = _tooltp.offsetLeft;
                var coordenadaYElemento = _tooltp.offsetTop;
                var x = 0;
                var y = 0;
                var position = "left";
                if (_tooltp.dataset.position != null ||
                    _tooltp.dataset.position != undefined) {
                    position = _tooltp.dataset.position;
                }
                switch (position) {
                    case "left": {
                        x = coordenadaXElemento + anchoElemento / 2 + 45;
                        y = coordenadaYElemento;
                        break;
                    }
                    case "right": {
                        x = coordenadaXElemento - anchoElemento * 2 + 30;
                        y = coordenadaYElemento;
                        break;
                    }
                    case "top": {
                        x = coordenadaXElemento;
                        y = coordenadaYElemento - altoElemento - 20 + 12;
                        break;
                    }
                    case "bottom": {
                        x = coordenadaXElemento;
                        y = coordenadaYElemento + altoElemento + 8;
                        break;
                    }
                }
                var tooltip = document.createElement("div");
                tooltip.className = "tooltips " + position;
                tooltip.innerHTML =
                    typeof _tooltp.dataset.tooltip === "string"
                        ? _tooltp.dataset.tooltip
                        : "";
                tooltip.style.left = x + "px";
                tooltip.style.top = y + "px";
                document.body.appendChild(tooltip);
            };
            _tool.onmouseleave = function (evt) {
                document.querySelectorAll(".tooltips").forEach(function (tool) {
                    tool.remove();
                });
            };
        });
    },
};
/*!
 * Autor: Warlock
 * Desc
 */
var Oz = {
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
    init: function () {
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
