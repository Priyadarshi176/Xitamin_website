import { Router } from "express";
import { generateAiResponse } from "../controllers/aiAssistant.js";

const aiRoute = Router();

aiRoute.route('/aiResponse').post(generateAiResponse);

export default aiRoute;