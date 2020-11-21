hmbHomepage.onclick=function(s){
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


btnMap.onclick=function(){
  ChangeForm(map)
}

btnPhoneCall.onclick=function(){
  ChangeForm(contactUs)
}

btnTwitter.onclick=function(){
  ChangeForm(twitter)
}
