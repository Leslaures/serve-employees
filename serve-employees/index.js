import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5175", "http://localhost:3000"] }));

const sampleEmployee = [
  {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  },
  {
    name: {
      first: "Laure",
      last: "Maffini",
    },
    email: "laure.maffini@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  }
];

app.get("/api/employees", (req,res) => {
    res.json({results: sampleEmployee});
});

const port = 8080;

app.listen(port, () => {
    console.info(`Example app listening on port ${port}`);
});