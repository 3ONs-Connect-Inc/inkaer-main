import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import shortlistRoutes from "./routes/shortlistRoutes.js";

// Allow only your frontend domain
const CLIENT_URL = process.env.CLIENT_URL || 'https://inkaer.com';
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: [CLIENT_URL, 'http://localhost:5173'],
  credentials: true
}));

app.use(bodyParser.json());

// Routes
app.use("/api/shortlist", shortlistRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
