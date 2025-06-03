import express from 'express';
import { verifyToken } from '../middleware/authentication.js';
import { updateProject, viewProject } from '../controller/project.controller.js';

const router = express.Router();

// Route to view the project
router.get("/:id", verifyToken, viewProject)

// Route to update the project
router.get("/:id", verifyToken, updateProject)

export default router;