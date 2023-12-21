import { generatedId } from "../../../lib/generationId.js";
import { formatDate } from "../../../lib/formatDate.js";

export class MessageEntity {
  constructor(from, message, to) {
    this.id = generatedId();
    this.message = message;
    this.from = from;
    this.to = to;
    this.created_at = formatDate()
  }
}
