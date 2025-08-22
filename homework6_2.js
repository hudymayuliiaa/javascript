var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

let re = /\w+@(gmail|yahoo)\.com/;

for (let i in arr) {
    if (re.test(arr[i].email))
        console.log(arr[i].email)
}
