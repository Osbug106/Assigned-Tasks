const fs = require("fs");
const http = require("http");
const home = fs.readFileSync("index.html", "utf-8");
var newData;
var realData;
function updateRes(home1, newData1)
{
    let updateHome = home1;
    updateHome = updateHome.replace("{%city%}", newData1[0].name);
    updateHome = updateHome.replace("{%country%}", newData1[0].sys.country);
    updateHome = updateHome.replace("{%temp%}", newData1[0].main.temp);
    updateHome = updateHome.replace("{%min%}", newData1[0].main.temp_min);
    updateHome = updateHome.replace("{%max%}", newData1[0].main.temp_max);
    updateHome = updateHome.replace("{%tempIcon%}", newData1[0].weather[0].main);
    // console.log(newData1[0].main.temp);
    return updateHome;
}

const server = http.createServer((req, res) => {
    // console.log(req.query);
    http.get(`http://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=336a14a255c7b94fe06cefc8061db5a0`, (res) => {
        res.setEncoding('utf-8');
        res.on("data", (chunk) => {
            newData = [JSON.parse(chunk)];
            realData = updateRes(home, newData);
        });
    });
    res.end(realData);
}).listen(3000, "localhost", () => {console.log("Listening to port 3000.")});