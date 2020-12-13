    document.addEventListener('DOMContentLoaded' , start);
    
    function start(){
        let btn = document.querySelector('#head');
        btn.addEventListener('click' , animate);
    }

    function animate(){
        let begin = document.querySelector('#svg');
        begin.classList.toggle('clicked');

        let text = document.querySelector('h1');
        text.innerHTML = 'Click to Turn Off';
    }

