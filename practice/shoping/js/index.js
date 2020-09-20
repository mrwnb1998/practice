window.onload = function () {
    var search = document.getElementById('sea');
    var x = 1;
    console.log(search);
    console.log(x);


    search.onfocus = function () {
        if (this.value === '语言开发') {
            this.value = '';
        }
        this.style.color = '#333';

    }
    search.onblur = function () {
        if (this.value === '') {
            this.value = '语言开发';
        }
        this.style.color = '#666';
    }
}