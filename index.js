// // let rectangle = require("./rectangle");
// // const calculateRec = (l, b) => {
// //   if (l <= 0 || b <= 0) {
// //     console.log(`${l} and ${b} must be a number greater than 0`);
// //   } else {
// //     console.log(
// //       `The perimeter of  ${l} and ${b} is  ${rectangle.perimeter(l, b)} `
// //     );

// //     console.log(`The area of  ${l} and ${b} is  ${rectangle.area(l, b)} `);
// //     console.log("***************");
// //   }
// // };

// // calculateRec(2, 5);
// // calculateRec(24, 52);
// // calculateRec(0, 5);

// // FILE OPERATION
// const fs = require("fs");
// // Read a file
// // const water = (name = "anonymous") => {
// //   fs.readFile("./docs/blog.txt", (err, data) => {
// //     if (err) {
// //       console.log(err);
// //     }

// //     console.log(data.toString(), name);
// //   });
// // };
// // water();

// // write into a file
// // const contentofFile = "Hello world";
// // fs.writeFile("./docs/new/blog.txt", contentofFile, () => {
// //   console.log("file written");
// // });

// //Create folder and delete folder
// // if (!fs.existsSync("./docs/test")) {
// //   fs.mkdir("./docs/test", () => {
// //     console.log("folder created");
// //   });
// // } else {
// //   //delete a directory
// //   fs.rmdir("./docs/test", () => {
// //     console.log("folder removed");
// //   });
// // }

// //delete a file after checking if it exist
// // if (fs.existsSync("./rectangle.js")) {
// //   fs.unlinkSync("./docs/blogger.txt", (err) => {
// //     if (err) {
// //       console.log(err);
// //     }
// //     console.log("file deleted");
// //   });
// // }

// //stream lots of information. read from a big file and also write into pdf file

// const readStream = fs.createReadStream("./docs/huge.txt", { encoding: "utf8" });
// const writeStream = fs.createWriteStream("./docs/huge3.txt");
// // readStream.on("data", (chunk) => {
// //   console.log("#..... new Chunk ........###");
// //   console.log(chunk);
// //   writeStream.write("\n NEW CHUNK \n");
// //   writeStream.write(chunk);
// // });

// //PIPING
// // for reading inside a stream and copying into another file
// readStream.pipe(writeStream);

/*

working with HTTP

*/
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set header
  res.setHeader("Content-Type", "text/html");
  // simple routing begins, set default path and switch based on what is in url
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  //   res.write("<h1>Hello Ninja</h1>");
  //   res.write("<p>It is a new begining</p>");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data); when sending one thing we dont need this
      res.end(data);
    }
  });
});

server.listen(5000, "localhost", () => {
  console.log("listening for request on port 5000");
});
