const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const generatePassword = document.getElementById("generater")


generatePassword.addEventListener("click" ,()=> {
    
let key1 = ""
let key2 = ""
if(getLength.value < 17){
    for (let i=0 ; i<getLength.value ;i++){
        key1 += characters[Math.floor(Math.random()*characters.length)]
        key2 += characters[Math.floor(Math.random()*characters.length)]
        
    }
    password1.textContent = key1
    password2.textContent = key2
    }else{
        alert("input value must be lower then 16")
    }
    password1.addEventListener("click", ()=>{
        document.execCommand("copy");
    })

    password1.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
    event.clipboardData.setData("text/plain", password1.textContent);
    console.log("copied")
    }})
     password2.addEventListener("click", ()=>{
        document.execCommand("copy");
    })

    password2.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
    event.clipboardData.setData("text/plain", password2.textContent);
    console.log("copied")
    }});
})

