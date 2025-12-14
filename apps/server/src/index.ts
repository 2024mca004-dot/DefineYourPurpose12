import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { setupVite } from "./vite";
import { setupAuth } from "./auth";
import routes from "./routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve attached assets
app.use("/attached_assets", express.static(path.resolve(__dirname, "..", "attached_assets")));

setupAuth(app);

app.use("/api", routes);

setupVite(app).then(() => {
  const PORT = 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`serving on port ${PORT}`);
    console.log("Using in-memory storage - no database required");
  });
});
