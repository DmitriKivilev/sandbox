let str_a = "/users/2"
let splitSTR = str_a.split("/")
const final = splitSTR[1] + splitSTR[2]
const users = [
{ id: 1, name: "Alice", age: 25 },
{ id: 2, name: "Bob", age: 30 },
{ id: 3, name: "Charlie", age: 22 }
];
if (final.startsWith("users2")){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users[1]))}
else{
    response.write("User not found")
    response.end()}