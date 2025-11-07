import express, { type Request, Response, NextFunction } from "express";
import { setupVite } from "./vite";
import { setupAuth } from "./auth";
import routes from "./routes";
import { seed } from "./seed";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

setupAuth(app);

app.use("/api", routes);

setupVite(app).then(() => {
  const PORT = 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`serving on port ${PORT}`);
    seed().catch(console.error);
  });
});
