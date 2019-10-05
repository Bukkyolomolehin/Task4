// Fetch API POST and GET request endpoint
const theRegistrationUrl = "./backend/route.php/register";
/* request function */

async function sendRequest(url,data){

function formEncode(obj) {
var str = [];
for(var p in obj)
str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
return str.join("&");
}

var dat = await fetch(url, {
method: 'POST',
headers: { "Content-type": "application/x-www-form-urlencoded"},
 credentials: "include",
body: formEncode(data)
}).then(res => res.json())
.then(response => JSON.stringify(response))
.catch(error => console.error('Error: '+error));

return JSON.parse(dat);

}


function registerNow(){
let confirm = document.querySelector("input[name='confirm']").value;
let password = document.querySelector("input[name='password']").value;
let email = document.querySelector("input[name='email']").value;
let fullname = document.querySelector("input[name='fullname']").value;
let submitBtn = document.querySelector("input[type='submit']");
let display = document.querySelector("span[class='display']");

 //Added form validation
 
if (fullname==null || fullname==""){  
  alert("Full name can't be blank");  
  return false;  
}

function checkpass()
{
if(document.password.value!=document.confirm.value)
{
alert('Password and Confirm Password field does not match');
document.confirm.focus();
return false;
}
return true;
} else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  } 
}  




function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

 //End of form validation
 
 
let doReg = sendRequest(theRegistrationUrl,{password:password,email:email,confirm:confirm,fullname:fullname});
doReg.then(function(data){
  if (data.error == 1) {
//redirect to dashboard

//dislay error message
display.innerHTML= `<span style='color:red'>${data.errorMessage}</span>`;



  }else{

display.innerHTML= `<span style='color:green'>${data.successMessage}</span>`;

setTimeout(function(){
   window.location.assign("./index.html")

},1000);
  }

})
return false;
}
