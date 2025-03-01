import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"
import { createClient } from "@supabase/supabase-js"

dotenv.config();

const app = express();


const PORT = 5000;

app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})

app.post("/tasks/:userID", async (req, res) => {
    const {userID} = req.params;
    

    
})