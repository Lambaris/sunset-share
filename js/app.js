//Utilizar JS para fazer o tamanho do paralelogramo dinamico

document.getElementById('icon1').addEventListener('click', function (evitarEvento) {
    evitarEvento.preventDefault()
    document.getElementById('icon1').style.display = 'none';
    document.getElementById('icon2').style.display = 'inline';
});

document.getElementById('icon2').addEventListener('click', function (evitarEvento) {
    evitarEvento.preventDefault()
    document.getElementById('icon2').style.display = 'none';
    document.getElementById('icon1').style.display = 'inline';
});
// document.getElementById('btnLogin').addEventListener('click', function(window){
//     window.location.href = "profile.html"

// });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// 1 == 1? console.log("True"):console.log("False");