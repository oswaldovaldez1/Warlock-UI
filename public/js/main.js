window.onload = function () {
    let links = document.querySelectorAll(".link-url");

    links.forEach((item) => {
      item.addEventListener("click", (evt) => {
        try {
          renderUrl(evt.target.dataset.url);
          reset();
        } catch (e) {}
        reset();
      });
    });
    reset();
}
function makeHttpObject() {
    try {
      return new XMLHttpRequest();
    } catch (error) {}
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (error) {}
    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (error) {}
  
    throw new Error("Could not create HTTP request object.");
  }
  
  function renderUrl(url) {
    if (url === undefined || url === null || url === "") return;
  
    var request = makeHttpObject();
    request.open("GET", url, true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState == 4)
        //alert(request.responseText);
        try {
          render.innerHTML = request.responseText;
        } catch (e) {}
    };
  }
  function reset(){    
    setTimeout(()=>{
    Oz.init();
    prettyPrint();
    },700);
}