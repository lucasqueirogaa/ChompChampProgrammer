import express, { Request, Response } from "express";

const router = express.Router();

router.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ message: "API Working" });
});

export default router;
