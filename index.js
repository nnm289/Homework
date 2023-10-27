
const input1 = document.getElementById("inputUsername");
const input2 = document.getElementById("inputPassword");

let users = [{
    username: "nhatminh1",
    password: "123456",
    address: "HN",
    status: "active",
},

{
    username: "nhatminh2",
    password: "654321",
    address: "HN",
    status: "inactive",
}
]


function login(username, password) {
    let result = ""
    if (!username || !password) {
        result = "Please input your username"
    } else {
        let userValid = users.find((user) => user.username === username)
        if (!userValid || userValid.password !== password) {
            result = "Username or password not match"
        }
        else if (userValid.status === "active") {
            result = "Log in successfully"
        }
    }
    alert(result)
}
login(input1,input2)