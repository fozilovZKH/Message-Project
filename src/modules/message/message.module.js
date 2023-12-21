import { Router } from "express";
import { MessageService } from "./message.service.js";
import { MessageController } from "./message.controller.js";

const messageRouter = Router();

const messageService = new MessageService();
const messageController = new MessageController(messageService);

messageRouter.get("/", (req, res) => {
  messageController.getAllMessage(req, res);
})

messageRouter.post("/", (req, res) => {
  messageController.create(req, res);
});

export default { messageRouter };
