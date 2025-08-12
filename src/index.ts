import express from "express";
import dotenv from "dotenv";
import axios from "axios"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: any, res: any) => {
  return res.send("Everything is working fine");
});

app.get("/api/v1/users", async (req:any, res: any)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    return response.data
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
