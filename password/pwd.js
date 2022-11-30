const pwd = prompt("Enter the password");
if(pwd.length>=6 && pwd.indexOf(' ') === -1)
{
    console.log("Valid password!")
}
else
{
    console.log("Incorrect password!")
}