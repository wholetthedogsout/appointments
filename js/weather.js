function getWeather () {
  var city = $(".cityState").text().substring(0,$('.cityState').text().indexOf(','));

  console.log($(".cityState").text());
  console.log(city);

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='
    +city+'&units=imperial&APPID=d6bdee234a286f140c6230ff50ac4250')
     .done(function (data) {
        console.log(data);
        $('.location').append('<div><span>'
        +data.main.temp+' &degF</span><span><img src =http://openweathermap.org/img/w/'
        +data.weather[0].icon
        +'.png></span></div>');
  })
}
