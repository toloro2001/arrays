const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
function write(title, value){
    document.write(title +"<br>"+JSON.stringify(value)+"<br>")
}
//newElement.textContent = JSON.stringify(lotrCitiesArray);
var kata1 = gotCitiesCSV.split(",");
write("kata1 ", kata1)
 
var kata2 =bestThing.split(" ");
write("kata2 ", kata2)

var kata3 = gotCitiesCSV.split(";");
write("kata3 ", kata3)

var kata4 = lotrCitiesArray.join(",");
write("kata4 ", kata4)

var kata5 = lotrCitiesArray.slice(3);
write("kata5", kata5)

var kata6 = lotrCitiesArray.splice(2,1);
write("kata6", lotrCitiesArray)

var kata7 = bestThing.slice(23,38);
write("kata7", kata7)

var kata8 = bestThing.indexOf("only");
write("kata8", kata8)

var kata9 = gotCitiesCSV.includes("aa");
write("kata9",kata9)

var kata10 = lotrCitiesArray.sort(length);
write("kata10", kata10)

