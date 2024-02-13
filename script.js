// Variable scope and closure- 

{
    let message = "Hello";
    alert(message);
}

/* alert(message); the code is only visible within the scope of the code block and cant be called
outside of the curly braces */
{
    let message = "Hello # 2";
    alert(message);
}
/* we are able to redeclare the same variable name because the first name 'message'  was declared
inside of a variable scope and it principle only apply within the scope */

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();
alert(counter())
alert(counter())