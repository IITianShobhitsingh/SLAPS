var select = document.getElementById("timeManager");
console.log(select)
select.addEventListener('submit',function(e){
    e.preventDefault
    var eros = select.querySelector('input[type="time"]').value
    console.log(eros)
    alert("Your "+ eros + " hour time starts now!!")
    localStorage.setItem('time',eros);
})
