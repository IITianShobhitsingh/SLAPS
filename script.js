const init = function(e){
    let startTime=new Date();
    console.log(startTime);
    localStorage.setItem('start-time',startTime.getTime())
    window.document.location='main.html';
    console.log(localstorage.getItem('start-time'))
    let endDate = new Date();
    console.log(startTime - endDate)
}
