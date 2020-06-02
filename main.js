const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const namaste = function (req, res) {
  const { text } = req.body;
  res.json({
    text: `Namaste ${text}`,
    attachments: [
      {
        text: `Nice to meet you ${text}`,
      },
    ],
  });
};

app.post("/", namaste);

app.listen(1000, () => console.log("listening ..."));
