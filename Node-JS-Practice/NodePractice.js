// const fs = require("fs");
// fs.mkdirSync("folder");
// fs.writeFileSync("folder/bio.txt", "Name: Umar\nAge: 23");
// fs.appendFileSync("folder/bio.txt", "\nGender: Male");
// var buffer = fs.readFileSync("folder/bio.txt", "utf-8");
// console.log(buffer);
// fs.renameSync("folder/bio.txt", "folder/myBio.txt");
// fs.unlinkSync("folder/myBio.txt");
// fs.rmdirSync("folder");

const http = require("http");
http.createServer((req, res) => {
    http.get("http://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=336a14a255c7b94fe06cefc8061db5a0", (res) => {
        res.setEncoding('utf8');
        res.on("data", (chunk) => {
            console.log(chunk);
        });      
    });

    if(req.url == "/")
    {
        res.write("Hello World.");
    }
    else if(req.url == "/about")
    {
        res.write("This is About Us page.");
    }
    else
    {
        res.writeHead(404, {"Content-type":"text/html"})
        res.write("404.. !\nPage not found.");
    }
    res.end();
}).listen(8000, "127.0.0.1", () => {console.log("Listening to port 8000.")});

