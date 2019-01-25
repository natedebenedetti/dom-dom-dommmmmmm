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
        div.id = 'div' + clickCount++;
        document.body.appendChild(div);
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.backgroundColor = 'black';
        div.style.display = 'inline-flex';
    })
})