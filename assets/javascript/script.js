var button = document.querySelector('#begin');

button.addEventListener('click', function(){
    document.getElementById('homePage').style.display = 'none'
    document.getElementById('questionOne').style.display = 'flex'
    document.getElementById('questionOneAnswers').style.display = 'flex'
});    