var games = new array ();
{
games [0]="world of warcraft"; 
games [1]="Lord of the rings online";
games [2]="Aion";
games [3]="Eve online";
games [4]="Final fantastique";
games [5]="city of heros";
games [6]="champions online";
games [7]="dark age of camelot";
games [8]="warhmmer online";
games [9]="age of conan";
}

Fonction pageLoaded()

{var list="";
for (i=o; i<games.lenth; i++)}

{list="<li>"+games [i]+"</li>";
$("#gamelit").append(list);
//document.getElementByld("gamelist").innerHTML=list; list="";
}

$(document).ready(function(){pageLoaded()});



















