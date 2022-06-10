const today = new Date ();

let hour = today.getHours();

var name = 'moshe';

var info = 'moshe'


function myFuction(){
    window.alert('Added to cart')
}

//id (sub-head)
if (hour === 18){
    document.getElementById('sub-head') .innerHTML = 'Good Evening!';
} else if (hour > 18){
    document.getElementById('sub-head') .innerHTML = 'Good Evening!'
}


if (hour === 18){
    document.getElementById('moshe') .innerHTML = 'We Are Closed Now';
} else if (hour > 18){
    document.getElementById('moshe') .innerHTML = 'We Are Closed Now'
}


if (hour === 18){
    document.getElementById('perl') .innerHTML = 'Open Tomorow At 9am';
} else if (hour > 18){
    document.getElementById('perl') .innerHTML = 'Open Tomorow At 9am';
} else {
    document.getElementById('perl') .innerHTML = 'Opens At 9am'
}

.getElementById('pratice') .innerHTML = 'hello world';

