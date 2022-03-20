// This is an example of the greet() function covering requirements layed out in the Unit Testing Practice activity
function Greet(name) {
    if (name == null) {
        return "Hello there!"
    }
    else if(typeof name === typeof []) 
    {if (name.length > 1) {
        let names = ""
        name.forEach((element) => {
            names = names + ", " + element
        })
    
        return "Hello" + names
    }}
    else if (name == name.toUpperCase()) {
        return "HELLO " + name + "!"
    }

    else {
        return "Hello, " + name
    }
}

console.log(Greet("Russell"))
console.log(Greet())
console.log(Greet("RUSSELL"))
console.log(Greet(["a", "b"]))