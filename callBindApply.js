// Call function
// function greeting(greeting, ){
//     console.log(greeting, this.name)
// }

// const user = { name: "Tarun"};
// greeting.call(user,"Good Morning")

//======================================================================


// apply function
// function applyFunction(g1, g2){
//     console.log(g1, g2, this.name)
// }

// applyFunction.apply(user, ["Hello", "Morning"])

//======================================================================

// bind function
// function introduce(person, city){
//     console.log(this.name, person, city)
// }

// const user1 = { name: "Tarun"};
// const user2 = { name: "Manoj"};

// const u = introduce.bind(user1, "Tarun")
// u("Delhi")
