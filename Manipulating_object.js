
var firstObj =
{
"name" : "Bat",
"colour" : "yellow",
"material" : "wood",
"no" :5,
}
//Accesing the object
var vColour  = firstObj.colour;
console.log("The colour of object is (Dot Notation)"+vColour);
//Accessing using bracket notation
var vNo = firstObj["no"];
var vMaterial = firstObj['material'];
console.log("The colour of object is (bracket Notation)"+vNo);
console.log("The colour of object is (bracket Notation)"+vMaterial);
//Accessing using the variables
var vName = "nemona";
var vName1 = firstObj['nemona'];
console.log("The colour of object is (Variable)"+vName1);
//Updating properties
firstObj.name = "Ball";
console.log("The changed name is "+firstObj.name);
//Adding a property
firstObj.avl=true;
console.log("The new property is "+firstObj.avl);
//Deleting properties
delete firstObj.colour;
