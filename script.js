

document.body.onload = function () {
  document.body.style.display = "block";
  update();
};

svg = document.getElementById("openmenu"); 
  svg.onclick = function ()
  {
    
    console.log(svg.src);
    if(svg.src.includes("openmenu"))
    {
      document.getElementsByTagName("nav")[0].style.display = "block";
      svg.src = "close.svg";
      
    }
    else
    {
      document.getElementsByTagName("nav")[0].style.display = "none";
      svg.src = "openmenu.svg";

      document.body.style.backgroundBlendMode = "normal";
    }
  };


if(window.innerHeight > window.innerWidth)
{
  if(document.URL.includes("magasin"))
  {
   setTimeout(() => {
        let ele = document.getElementById("model1");
        ele.style.top = "-2.4vw";
        ele.style.right = "33vw";
        ele.style.opacity ="1";
        ele = document.getElementById("model2");
        ele.style.top = "-2.5vw";
        ele.style.right = "17vw";
        ele.style.opacity ="1";
        ele = document.getElementById("model3");
        ele.style.top = "-2.6vw";
        ele.style.right = "4vw";
        ele.style.opacity ="1";
        ele = document.getElementById("model4");
        ele.style.top = "-2.7vw";
        ele.style.right = "-10vw";
        ele.style.opacity ="1";
        ele = document.getElementById("model5");
        ele.style.top = "-2.8vw";
        ele.style.right = "-24vw";
        ele.style.opacity ="1";
        ele = document.getElementById("describe");
        ele.style.top = "96vw";
        ele.style.width = "80%";
        ele.style.left = "16vw";
    }, 16000); 
    
  }
}

if(document.URL.includes("magasin"))
  {
    setTimeout(() => {
        let ele = document.getElementById("describe");
        ele.innerHTML = "Our Summer Tshirts";
        ele.style.color = "#83000e";
    }, 1000);

    setTimeout(() => {
        let ele = document.getElementById("describe");
        ele.innerHTML = "Chillin' with Tshirts";
        ele.style.color = "#114f57";
    }, 4500);

    setTimeout(() => {
        let ele = document.getElementById("describe");
        ele.innerHTML = "Quotes Tshirts";
        ele.style.color = "#2a292a";
    }, 7500);

    setTimeout(() => {
        let ele = document.getElementById("describe");
        ele.innerHTML = "Cities Tshirts";
        ele.style.color = "#df8294";
    }, 10500);

    setTimeout(() => {
        let ele = document.getElementById("describe");
        ele.innerHTML = "Street Wear Tshirts";
        ele.style.color = "#2a292a";
    }, 13500);
    setTimeout(() => {
      let ele = document.getElementById("describe");
      ele.innerHTML = "découvrez-en plus <span class=\"fa-solid fa-caret-down\"></span>";
      ele.style.color = "#2a292a";
      ele.style.opacity = "1";
      ele.style.left = "16vw";
    }, 16500);
  }