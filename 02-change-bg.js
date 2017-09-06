(function(){

    function changeBgColor(color) {
        document.body.style.backgroundColor = color;
    }

    var btn = document.getElementById('color-change-btn');
    btn.addEventListener('click', function(e){
        e.preventDefault();
        changeBgColor('red');
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded');
        changeBgColor('purple');
    });

    window.addEventListener('load', function() {
        console.log('window load event');
        changeBgColor('cyan');
    })
})();


