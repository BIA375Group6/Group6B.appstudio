//code for Hamburger Menu on Login page
hmbLogin.onclick=function(s){
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

let pw = 'IheartBIA'
let req = ''
let results = ''

btnLogin.onclick=function(){
    query = 'SELECT * FROM users'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bmn70134&pass=" + pw + "&database=bmn70134&query=" + query)
    console.log(req.responseText)
    
        if (req.status == 200) {
          results = JSON.parse(req.responseText) 
        }

        let firstInput = inptAccount.value
        let secondInput = inptPassword.value
        let found = false
        for (i = 0; i < results.length; i++){
            if (firstInput == results[i][0] && secondInput == results[i][1]) {
               console.log(results[i][0])
               found = true
               ChangeForm(loginSuccess) 
            }
            else   
              lblLogin.value = 'Sorry, that is not a valid login'
       }
}

btnHomepage3.onclick=function(){
  ChangeForm(homepage)
}
