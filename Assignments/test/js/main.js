//============= first task=================d
var number = prompt("Enter Your Number");
if(number >= 90 && number <= 100){
    console.log("Excellent")
}
else if(number >= 80){
    console.log("very good")
}
else if(number >= 70){
    console.log("good")
}
else if(number >= 50){
    console.log("pass")
}
else if(number >= 0 && number < 50 ){
    console.log("fail")
}
else{
    console.log("Invalid Number")
}



//============= second task=================


function looping(startNum, endNum, breakNum , contNum) {

    if (startNum && endNum && breakNum && contNum) {
        for(var i =startNum; i < endNum; i++ ){
            console.log(i);
            if(i == breakNum)
                break;
             else if(i == contNum)
                continue;
        }
    } else {
        alert("Please enter all numbers");
    }

}
var startNum = prompt("Enter start number");
var endNum = prompt("Enter end number");
var breakNum = prompt("Enter break number");
var contNum = prompt("Enter continue number");

looping(startNum, endNum, breakNum, contNum);


//============= third task=================

var courses = ["js", "Html", "css"];
var course = prompt("Enter Your Course");
var found = false;

for (var i = 0; i < courses.length; i++) {
  if (courses[i] === course) {
    console.log("The course is found");
    found = true;
    break;
  }
}

if (found === false) {
  courses.push(course);
  console.log("Course added");
}

console.log(courses);
