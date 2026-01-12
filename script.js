const USERS = {
  "Chandrukar Reddy":"Chandrukar@7",
  "Revanth Reddy":"Revanth@10"
};

function login(){
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();

  if(USERS[u] === p){
    localStorage.setItem("rcLogin","yes");
    showMain();
  } else {
    document.getElementById("err").innerText = "Invalid credentials";
  }
}

function logout(){
  localStorage.removeItem("rcLogin");
  location.reload();
}

function showMain(){
  document.getElementById("loginPage").style.display="none";
  document.getElementById("mainPage").style.display="block";
}

if(localStorage.getItem("rcLogin")==="yes"){
  showMain();
}
