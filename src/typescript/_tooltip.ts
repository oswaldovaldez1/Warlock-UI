let _toolTip = {
  init() {
    document.querySelectorAll(".tooltip").forEach((_tool: any) => {
      _tool.onmouseover= function (evt: Event) {
        let _tooltp = <HTMLInputElement>evt.target;

        let anchoElemento = _tooltp.offsetWidth;
        let altoElemento = _tooltp.offsetHeight;

        // Coordenadas del elemento al que se quiere añadir el tooltip
        let coordenadaXElemento = _tooltp.offsetLeft;
        let coordenadaYElemento = _tooltp.offsetTop;

        let x = 0;
        let y = 0;
        let position = "left";

        if (
          _tooltp.dataset.position != null ||
          _tooltp.dataset.position != undefined
        ) {
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

        // Crea el tooltip con sus atributos
        let tooltip = document.createElement("div");
        tooltip.className = "tooltips " + position;
        tooltip.innerHTML =
          typeof _tooltp.dataset.tooltip === "string"
            ? _tooltp.dataset.tooltip
            : "";
        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";

        // Añade el tooltip
        document.body.appendChild(tooltip);
      };
      _tool.onmouseleave= function (evt: Event) {
        document.querySelectorAll(".tooltips").forEach((tool: any) => {
          tool.remove();
        });
      };
    });
  },
};
