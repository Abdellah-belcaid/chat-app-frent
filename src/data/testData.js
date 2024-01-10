// testData.js

import avatar1 from "../assets/avatars/avatar 1.png";
import avatar2 from "../assets/avatars/avatar 2.png";
import avatar3 from "../assets/avatars/avatar 3.png";
import avatar4 from "../assets/avatars/avatar 4.png";
import avatar5 from "../assets/avatars/avatar 5.png";

class User {
  constructor(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.chats = [];
  }
}

class Chat {
  constructor(id, participants) {
    this.id = id;
    this.participants = participants;
    this.messages = [];
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

// Test data
const user1 = new User(1, "John Doe", avatar1);
const user2 = new User(2, "Alice Johnson", avatar2);
const user3 = new User(3, "Bob Smith", avatar3);
const user4 = new User(4, "Eva Davis", avatar4);
const user5 = new User(5, "Michael Brown", avatar5);
const user6 = new User(6, "Emily White", avatar1);
const user7 = new User(7, "Daniel Lee", avatar2);

const chat1 = new Chat(1, [user1, user2]);

const message1 = new Message(1, user1, "Hey, how are you?");
const message2 = new Message(2, user2, "I'm doing well, thanks!");
const message2_1 = new Message(9, user1, "what about your family!");

chat1.messages.push(message1, message2, message2_1);
user1.chats.push(chat1);
user2.chats.push(chat1);

const chat2 = new Chat(2, [user1, user3]);
const chat3 = new Chat(3, [user2, user4, user5]);

const message3 = new Message(3, user3, "Hello there!");
const message4 = new Message(4, user1, "Hi! How are you doing?");
const message5 = new Message(5, user4, "Anyone up for a movie tonight?");
const message6 = new Message(6, user2, "Sure, I am in!");

chat2.messages.push(message3, message4);
chat3.messages.push(message5, message6);

user1.chats.push(chat2, chat3);
user2.chats.push(chat2, chat3);
user3.chats.push(chat2);
user4.chats.push(chat3);
user5.chats.push(chat3);

const chat4 = new Chat(4, [user1, user6]);
const chat5 = new Chat(5, [user1, user7]);

const message7 = new Message(7, user6, "Hey! Long time no see.");
const message8 = new Message(8, user1, "Yeah, it has been a while!");
const message9 = new Message(9, user7, "How are you doing?");

chat4.messages.push(message7, message8);
chat5.messages.push(message9);

user1.chats.push(chat4, chat5);

for (let i = 1; i <= 4; i++) {
  const message = new Message(
    i,
    user1,
    `Message ${i} from User 1 to User 3`,
    "sent",
    new Date(2023, 0, i, 10, i) // Set the hour to 10 and minutes to i
  );
  chat2.messages.push(message);
}

export {
  chat1,
  chat2,
  chat3,
  chat4,
  chat5,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
};
