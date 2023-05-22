let allStudents = []

addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let age = +document.getElementById("age").value
    let subject = document.getElementById("subject").value

    if(age >= 18){

        allStudents.push({
            firstName: first,
            lastName: last,
            studentAge: age,
            studentSubject: subject
        });

        alert("Student: " + first + " " + last + ", has been added to " + subject);
    } else {
        alert("Student is not old enough for this course");
    }

    console.log(allStudents)

    document.getElementById("studentForm").reset();
}

let orderList = [];

makePizza = () =>{

    let pizzaTotal = 0

     let pizzaName = document.getElementById("pizzaName").value;
     let size = document.getElementById("size").value;

     if(size === "Small"){
        pizzaTotal = pizzaTotal + 20;
     } else if(size === "Medium"){
        pizzaTotal = pizzaTotal + 40;
     } else if(size === "Large"){
        pizzaTotal = pizzaTotal + 60;
     }
     // Get Radio Options
    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
            pizzaTotal = pizzaTotal + +baseOption[i].dataset.cost;
        }
    }

    let toppingsOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingsOptions.length; i++){
        if(toppingsOptions[i].checked){
            topArray.push(toppingsOptions[i].value)
            pizzaTotal = pizzaTotal + +toppingsOptions[i].dataset.cost
        }
    }

    orderList.push({
        pizzaName: pizzaName,
        size: size,
        base: baseValue,
        toppingsOptions: topArray,
        cost: pizzaTotal
    });

    console.log(orderList);

    document.getElementById("studentForm").reset();

}





