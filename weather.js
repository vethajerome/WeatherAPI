function displayresult(){
    var city=document.getElementById("city"). value ;
    var apikey='26e461707efe1e057e5352459efcc82e';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data=> {
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t;
        var n=data['main']['pressure']
        document.getElementById("min").innerHTML=n;
        var m=data['main']['humidity']
        document.getElementById("max").innerHTML=m;
    })
}