import express from "express";

import userRoute from "./Routes/User.js";

const PORT = 5000;
const app = express();

app.use("/users", userRoute);
app.get("/", (req, res) => res.send("shahzaib"));

app.listen(PORT, () => console.log(`Server  is running on ${PORT}`));
