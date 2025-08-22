import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import shortlistRoutes from "./routes/shortlistRoutes.js";



const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/shortlist", shortlistRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
