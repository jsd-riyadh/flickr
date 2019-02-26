$(function(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude + "-" + position.coords.longitude);
          
          let url = "https://api.flickr.com/services/rest/?"
          let params = {
              api_key : "5bb64e545d706386c2748ea4b6b79929",
              lat : position.coords.latitude.toFixed(1),
              lon : position.coords.longitude.toFixed(1),
              method:"flickr.photos.search",
              extras: "url_n", 
              format:"json",
              tags : "places",
              nojsoncallback : 1,

          }

          for(let key in params){
            url += "&"+ key + "=" + params[key]
          }

          $.get(url, function(res){
            console.log(res.photos.photo)

            res.photos.photo.forEach(element => {
                $(".info").append(`<img src="${element.url_n}"/>`)
            });
        })
    })
    }else{
        console.log("couldnt find")
    }
    

})