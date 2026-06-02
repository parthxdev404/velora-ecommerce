import app from "./src/app.js";
import http from "http";
import dns from "dns";
import connectDB from "./src/configs/db.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const server = http.createServer(app);
const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server is Running successfully on ${port}`);
});
