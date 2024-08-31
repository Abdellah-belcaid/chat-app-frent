export class User {
  constructor(id, name, avatar, email, password, status, bio, lastSeen) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.email = email;
    this.password = password; // Added password field
    this.status = status;
    this.bio = bio;
    this.lastSeen = lastSeen;
    this.chats = [];
  }
}
export class Chat {
  constructor(id, participants) {
    this.id = id;
    this.participants = participants;
    this.messages = [];
    this.isGroupChat = participants.length > 2;
  }
}
export class Message {
  constructor(
    id,
    sender,
    content,
    type = "text",
    status = "sent",
    timestamp = new Date()
  ) {
    this.id = id;
    this.sender = sender;
    this.content = content;
    this.type = type;
    this.timestamp = timestamp;
    this.status = status;
  }
}

// Example Types
export const MessageType = {
  TEXT: "text",
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
};

// Example Statuses
export const MessageStatus = {
  SENT: "sent",
  DELIVERED: "delivered",
  READ: "read",
};
