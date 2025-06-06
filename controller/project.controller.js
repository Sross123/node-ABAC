import {projects} from "../data/projectData.js";
import { authorize } from "../middleware/authorize.js";
import { canUpdateProject, canViewProject } from "../policies/projectPolicy.js";

// Standardized response function
const handleResponse = (res, status, message, project) => {
  res.status(status).json({
    status,
    message,
    project,
  });
};

export const viewProject = (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = getProjectById(projectId);
  console.log("Project is: ", project);
  authorize(canViewProject, project)(req, res, () => {
    handleResponse(res, 200, "Project retrieved successfully", project);
  });
};
export const updateProject = () => {
  const projectId = parseInt(req.params.id);
  const project = getProjectById(projectId);
  console.log("Project is: ", project);
  authorize(canUpdateProject, project)(req, res, () => {
    handleResponse(res, 200, "Project update successfully", project);
  });
};

const getProjectById = (id, res) => {
  const project = projects.find((project) => project.id === id);
  if (!project) handleResponse(res, 404, "Project not found");
  return project;
};
