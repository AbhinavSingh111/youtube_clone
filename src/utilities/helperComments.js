// Sample human names (you can expand this list with real names)
const humanNames = [
    'Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
    'Katherine', 'Liam', 'Mia', 'Noah', 'Olivia', 'Parker', 'Quinn', 'Ryan', 'Sophia', 'Tyler',
    'Victoria', 'William', 'Xavier', 'Yasmine', 'Zachary', 'Ava', 'Benjamin', 'Chloe', 'Daniel',
    'Ella', 'Freddie', 'Grace', 'Hannah', 'Isaac', 'Jessica', 'Kylie', 'Lucas', 'Megan', 'Nathan',
    'Oliver', 'Penelope', 'Quincy', 'Rachel', 'Samuel', 'Taylor', 'Ursula', 'Vincent', 'Wendy',
    'Xander', 'Yvonne', 'Zane', 'Amelia', 'Bryce', 'Caroline', 'Dylan', 'Emily', 'Fiona', 'George',
    'Harper', 'Isabel', 'Jacob', 'Kaitlyn', 'Lily', 'Matthew', 'Nora', 'Oscar', 'Paige', 'Quinn',
    'Rebecca', 'Samantha', 'Theo', 'Uma', 'Violet', 'William', 'Xenia', 'Yara', 'Zane'
  ];
  
 // Sample one-line messages
const oneLineMessages = [
    'Hello there!',
    'Hows it going?',
    'I like your name!',
    'Whats your favorite color?',
    'Nice to meet you!',
    'Have a great day!',
    'Any exciting plans?',
    'Tell me a joke!',
    'Whats the weather like?',
    'Whats your favorite animal?',
    'I love coding!',
    'Coffee or tea?',
    'Favorite book?',
    'Enjoying the day?',
    'Weekend plans?',
    'Hows your family?',
    'Favorite movie?',
    'Travel or staycation?',
    'Any hobbies?',
    'Favorite music genre?',
    // Add more messages as needed
  ];

  export const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * humanNames.length);
    return humanNames[randomIndex];
  }
  
  
  export const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * oneLineMessages.length);
    return oneLineMessages[randomIndex];
  }
  

  
  