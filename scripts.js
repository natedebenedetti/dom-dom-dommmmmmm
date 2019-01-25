document.addEventListener("DOMContentLoaded", function () {
    let clickCount = 0;
    let btn1 = document.createElement('button');
    btn1.id = 'btn1';
    let btn1Text = document.createTextNode("Add Square");
    btn1.appendChild(btn1Text);
    document.body.appendChild(btn1);

    btn1.addEventListener('click', function () {
        let div = document.createElement('div');
        div.className = 'blackSquare';
        div.id = clickCount;
        let divText = document.createTextNode(clickCount);
        div.style.color = 'white';
        clickCount++;
        document.body.appendChild(div);
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.backgroundColor = 'black';
        div.style.float = 'left';
        div.addEventListener('mouseover', function() {
            div.appendChild(divText);
        })
        div.addEventListener('mouseout', function() {
            div.removeChild(divText);
        })
        div.addEventListener('click', function() {
            div.style.backgroundColor = getRandoColor();
        })
    })
    function getRandoColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')'; //rgb(0, 0, 0);
    }

    


})