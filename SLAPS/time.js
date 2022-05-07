var select = document.getElementById("timeManager");
console.log(select)
select.addEventListener('submit',function(e){
    e.preventDefault
    var eros = select.querySelector('input[type="text"]').value
    console.log(eros)
})


