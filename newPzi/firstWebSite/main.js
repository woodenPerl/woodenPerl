function menuFunction(){
    document.getElementById('index') .style = 'width: 50%';
    document.getElementById('menuContext') .style = 'display: block';
}

function deleteFunction(){
    document.getElementById('index') .style = 'widht: 0px';
    document.getElementById('menuContext') .style = 'display: none';
}

document.querySelector('.menuBtn') .onclick = function(){
    document.getElementById('index') .style = 'width: 50%';
    document.getElementById('menuContext') .style = 'display: block';
}

document.querySelector('.mainBody') .onclick = function(){
    document.getElementById('index') .style = 'widht: 0px';
    document.getElementById('menuContext') .style = 'display: none';
}