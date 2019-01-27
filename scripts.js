document.addEventListener("DOMContentLoaded", function () {
    let clickCount = 0; //for use in naming the id of each div later on.

    let btn1 = document.createElement('button'); // creates button with id "btn1" and the label for the button.
    btn1.id = 'btn1';
    let btn1Text = document.createTextNode("Add Square");


    btn1.appendChild(btn1Text); // places the label on the button and the button on the page.
    document.body.appendChild(btn1);

    btn1.addEventListener('click', function () { //all event listeners related to the creation of the squares and what happens with them
        let div = document.createElement('div');
        div.className = 'blackSquare';
        div.id = clickCount;
        let divText = document.createTextNode(clickCount);
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.color = 'white';
        clickCount++;
        document.body.appendChild(div);
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.backgroundColor = 'black';
        div.style.float = 'left';
        div.addEventListener('mouseover', function () {
            div.appendChild(divText);
        })
        div.addEventListener('mouseout', function () {
            div.removeChild(divText);
        })
        div.addEventListener('click', function () {
            div.style.backgroundColor = getRandoColor();
        })
        div.addEventListener('dblclick', function () {
            try { // only fix I could come up with... this will "try" every one of my if statements.
                if (div.id % 2 !== 0 && div.previousElementSibling.id !== 'btn1') { //check for odd
                    div.previousElementSibling.remove(div);
                } else if (div.id % 2 !== 0 && div.previousElementSibling.id == 'btn1') {
                    alert("That's ODD there is no square before me to delete");
                } else if (div.id % 2 == 0 && div.nextElementSibling.className == 'blackSquare') { //check for even
                    div.nextElementSibling.remove(div);
                } else { // code produces error at console every time due to there not being any element after the square.
                    alert("I tried to delete the square after me EVEN though it doesn't exist.");
                }

            } catch (error) { // this catches the error produced above and turns it into my alert.
                alert("I tried to delete the square after me EVEN though it doesn't exist.");
            }
        })





    })
    function getRandoColor() { //function that generates a random color... this is used in an event listener above to change the background color of a sqare that is clicked.
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')'; //rgb(0, 0, 0);
    }
})