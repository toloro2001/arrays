const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
function write(title, value){
    document.write(title +"<br>"+JSON.stringify(value)+"<br>")
}
//newElement.textContent = JSON.stringify(lotrCitiesArray);
var kata1 = gotCitiesCSV.split(",");
write("kata1 ",kata1)
 
var kata2 =bestThing.split(" ");
write("kata2", kata2)
