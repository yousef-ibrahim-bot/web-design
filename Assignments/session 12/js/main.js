var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');

var my_form = document.getElementById('my_form');

var divContainer =document.getElementById('divContainer');

my_form.addEventListener( "submit", (e)=>{
    e.preventDefault();
    
        var nameValue = userName.value;
        var emailValue = userEmail.value;

    var div = document.createElement('div')
    div.classList.add('alert','alert-info')

    var h3 = document.createElement('h3');
     h3.innerText ='Name: '
       div.appendChild(h3);
     
     var h4 = document.createElement('h4');
     h4.innerText = 'Email: '
       div.appendChild(h4);

    h3.innerText += nameValue;
    h4.innerText += emailValue;

    divContainer.appendChild(div);

})
var changeBtn = document.getElementById('changeBtn');
var myImage = changeBtn.previousElementSibling;

changeBtn.addEventListener('click', () => {

    if (myImage.src.includes("images/8.jpg")) {
        myImage.src = "images/pexels-tieugiang007-35096607.jpg";
    } else {
        myImage.src = "images/8.jpg";
    }

});