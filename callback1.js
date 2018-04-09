function task1() {
    setTimeout(function() {
        console.log('first');
    }, 2000);
}
 
function task2() { 
    setTimeout(function() {
        console.log('second');
    }, 1000);
}
 
function task3() { 
    setTimeout(function() {
        console.log('third');
    }, 25);
}
 
task1();
task2();
task3();

