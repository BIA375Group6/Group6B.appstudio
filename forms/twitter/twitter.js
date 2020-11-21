hmbTwitter.onclick=function(s){
  if (typeof(s) == "object") {   
    return
  } else {
  switch(s) {
case "Home Page":
  ChangeForm(homepage)
  break;
case "Map":
  ChangeForm(map)
  break;
case "Login":
  ChangeForm(login)
  break;
case "Login Confirmation":
  ChangeForm(loginSuccess)
  break;
case "Contact Us":
  ChangeForm(contactUs)
  break;
case "Twitter":
  ChangeForm(twitter)
  break;
}
}
}


let requestURL = "https://rss.app/feeds/9AeiAWR0BIFkE3mA.json"

btnAccess.onclick=function(){ 
callAPI(requestURL)

  
  /*const FEED_URL = "https://rss.app/feeds/BwAgoJrmBO67YVdz.json"
  $.get(FEED_URL, function(data) {
    var feed = ""
    data1 = JSON.parse(this.responseText)
    for (i=0; i < data.items.length-1;i++){
      console.log(`${data.items[i].title}`)
      feed = feed + data.items[i].title + "\n"
    }
  
    Textarea1.value = feed
    $(data).find("item").each(function() {
      const el = $(this)

      console.log("------------------------")
      console.log("title      : " + el.find("title").text())
      console.log("author     : " + el.find("author").text())
      console.log("description: " + el.find("description").text())
      });
  });
  */
}

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.items.length - 1; i++) {
        console.log(`${apiData.items[i].title}`)
        message = message + apiData.items[i].title + "\n"
    }
    Textarea1.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    
    
    
    /*xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


btnHomepage.onclick=function(){
  ChangeForm(homepage)
}
