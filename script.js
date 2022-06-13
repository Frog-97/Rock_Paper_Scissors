function computerplay() {
    let x = Math.random();
   alert(x);
    switch (x) {
        case x <= 0.333 :
            console.log("Rock");
            break;
        
        case x > 0.333 && x < 0.666 :
            console.log("Paper");
            break;

        case x > 0.666 && x < 1 :
            console.log("Scissors");
            break;
    }
}
alert(x);

computerplay();