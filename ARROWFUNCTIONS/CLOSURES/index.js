function parent() {
    const message = 'Hello World';

    function child() {
        alert (message);
    }

    return child;
}

const childFN = paret();
childFN();

//closure means that contenst/moment of when  a function is passed into an object at the time of execution 
//(assigning a function to an object)