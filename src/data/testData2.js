// testData.js

import avatar1 from "../assets/avatars/avatar 1.png";
import avatar2 from "../assets/avatars/avatar 2.png";
import avatar3 from "../assets/avatars/avatar 3.png";
import avatar4 from "../assets/avatars/avatar 4.png";
import avatar5 from "../assets/avatars/avatar 5.png";
import avatar6 from "../assets/avatars/avatar 5.png";
import avatar7 from "../assets/avatars/avatar 5.png";
import avatar8 from "../assets/avatars/avatar 5.png";

// class User {
//   constructor(id, name, avatar) {
//     this.id = id;
//     this.name = name;
//     this.avatar = avatar;
//     this.chats = [];
//   }
// }

class User {
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
class Chat {
  constructor(id, participants) {
    this.id = id;
    this.participants = participants;
    this.messages = [];
    this.isGroupChat = participants.length > 2; // Assume it's a group chat if there are more than 2 participants
  }
}

class Message {
  constructor(id, sender, text, status = "sent", timestamp = new Date()) {
    this.id = id;
    this.sender = sender;
    this.text = text;
    this.timestamp = timestamp;
    this.status = status; // Default status is "sent"
  }
}
// Users

const users = [];
const user1 = new User(
  1,
  "John Doe",
  avatar1,
  "john@example.com",
  "johns_password123",
  "online",
  "Hello, I'm John!",
  new Date()
);

const user2 = new User(
  2,
  "Alice Johnson",
  avatar2,
  "alice@example.com",
  "alices_password456",
  "offline",
  "Nice to meet you!",
  new Date()
);

const user3 = new User(
  3,
  "Bob Smith",
  avatar3,
  "bob@example.com",
  "bobs_password789",
  "away",
  "Greetings!",
  new Date()
);

const user4 = new User(
  4,
  "Eva Davis",
  avatar4,
  "eva@example.com",
  "evas_password101",
  "online",
  "Hi there!",
  new Date()
);

const user5 = new User(
  5,
  "Grace Lee",
  avatar5,
  "grace@example.com",
  "graces_password112",
  "offline",
  "Hello from Grace!",
  new Date()
);

const user6 = new User(
  6,
  "Samuel Brown",
  avatar6,
  "samuel@example.com",
  "samuels_password131",
  "away",
  "Nice to see you!",
  new Date()
);

const user7 = new User(
  7,
  "Olivia White",
  avatar7,
  "olivia@example.com",
  "olivias_password141",
  "online",
  "Greetings from Olivia!",
  new Date()
);

const user8 = new User(
  8,
  "Daniel Kim",
  avatar8,
  "daniel@example.com",
  "daniels_password151",
  "offline",
  "Hi, I'm Daniel!",
  new Date()
);

users.push(user1, user2, user3, user4, user5, user6, user7, user8);

// Chats
const chats = [];
const chat1 = new Chat(1, [user1.id, user2.id]);
const chat2 = new Chat(2, [user1.id, user3.id]);
const chat3 = new Chat(3, [user1.id, user4.id]);

user1.chats.push(chat3);

user4.chats.push(chat3);

chats.push(chat1, chat2, chat3);

// Messages
const messages = [];
const message1 = new Message(1, user1.id, "Hey, how are you?");
const message2 = new Message(2, user2.id, "I'm doing well, thanks!");

const message3 = new Message(3, user3.id, "Hello there!");
const message4 = new Message(4, user1.id, "Hi! How are you doing?");
const message5 = new Message(5, user3.id, "Sure, I am in!");
const message6 = new Message(6, user1.id, "Yeah, it has been a while!");

messages.push(message1, message2, message3, message4, message5, message6);

chat1.messages.push(message1.id, message2.id);
user1.chats.push(chat1.id);
user2.chats.push(chat1.id);

chat2.messages.push(message3.id, message4.id, message5.id, message6.id);
user1.chats.push(chat2.id);
user3.chats.push(chat2.id);

// // Additional messages
// for (let i = 8; i <= 10; i++) {
//   const message = new Message(
//     i,
//     user1.id,
//     `Message ${i} from User 1 to User 3`,
//     "sent",
//     new Date(2024, 0, i, 10, i)
//   );
//   chat2.messages.push(message.id);
//   messages.push(message);
// }

export { chats, users, messages };
