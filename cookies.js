
if(! document.cookie.startsWith("tshirt"))
      document.cookie = "tshirt= ; expires=Tue, 31 Dec 2030 12:00:00 UTC;path=/";

const cookies = document.cookie.replaceAll('=',';').split(';'); 

var tshirt = cookies[cookies.indexOf("tshirt")+1].split(',');
if (tshirt[0] === '' )
  tshirt = Array()

function afficherCookies()
{
  console.log(cookies)
}

function ajoutertshirt(id)
{
  tshirt.push(id);
  document.cookie = `tshirt=${tshirt};.join(',')} ; expires=Tue, 31 Dec 2030 12:00:00 UTC;path=/`;
  // document.cookie = `tshirt=${tshirt.slice(1, tshirt.length)};.join(',')} ; expires=Tue, 31 Dec 2030 12:00:00 UTC;path=/`;
  
  update();
}

function supprimertshirt(id)
{
  tshirt.splice(tshirt.indexOf(id),1);
  if (tshirt.length != 0)
    document.cookie = `tshirt=${tshirt};.join(',')} ; expires=Tue, 31 Dec 2030 12:00:00 UTC;path=/`;
  else 
    clearCookies()
  update();
  
}

function update()
{
  if (tshirt.length != 0)
    document.getElementById("items").innerHTML = tshirt.length;
  else 
    document.getElementById("items").innerHTML = '';

  if(document.getElementById("items2"))
    document.getElementById("items2").innerHTML = tshirt.length;
    
    
}

function clearCookies()
{
        document.cookie = "tshirt= ; expires=Sat, 1 Jan 2000 12:00:00 UTC;path=/";
}