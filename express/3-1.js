const express = require("express");
const zod  = require("zod");
const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username === "vikash" && password === "vikash") {
//     // do something here
//     if (kidneyId == 1 || kidneyId == 2) {
//       res.json({
//         msg: "Your Kidney is fine!",
//       });
//     } else {
//       res.json({
//         msg: "Bad Input!",
//       });
//     }
//   }
// });
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  //kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.json({
    response
  })
//   const kindneyLength = kidneys.length;

//   res.send("you have " + kindneyLength + " kidneys");
});

//global catches
app.use(function (err, req, res, next) {
  res.json({
    msg: "Bad Input!",
  });
});


app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
