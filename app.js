let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.value');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else{ 
            count = 0;
        }
        value.textContent = count;

        if(count>0) {
            value.style.color = "green";
        }

        if(count<0) {
            value.style.color = "red";
        }

        if(count===0) {
            value.style.color = "black";
        }
    })
})


// let count = 0;
// const decrease = document.querySelector('.decrease');
// const increase = document.querySelector('.increase');
// const reset = document.querySelector('.reset');
// const value = document.querySelector('.value');

// decrease.addEventListener('click', function(){
//     count--;
//     value.textContent = count;
// })

// reset.addEventListener('click', function(){
//     count = 0;
//     value.textContent = count;
// })

// increase.addEventListener('click', function(){
//     count++;
//     value.textContent = count;
// })

