// const conversations = [{
//     conversationIdentifier: 'init',
//     triggerArray: ['why', 'sad', 'hurt'],
//     yes: {
//         mood: 'sad',
//         ssmlResponse: 'I am not being noticed',
//         nextIdentifier: "con-2"
//     },
//     no: {
//         mood: 'mad',
//         ssmlResponse: 'Sorry, I am happy now',
//         nextIdentifier: "con-2"
//     }
// }, {
//     conversationIdentifier: 'con-2',
//     triggerArray: ['who', 'not', 'notic'],
//     yes: {
//         mood: 'sad',
//         ssmlResponse: 'Why are you like this?',
//         nextIdentifier: "con-3"
//     },
//     no: {
//         mood: 'mad',
//         ssmlResponse: 'Sorry, I am happy now',
//         nextIdentifier: "con-3"
//     }
// }, {
//     conversationIdentifier: 'con-3',
//     triggerArray: ['who', 'not', 'notic'],
//     yes: {
//         mood: 'happy',
//         ssmlResponse: 'Why do you ignore me?',
//         nextIdentifier: "con-4"
//     },
//     no: {
//         mood: 'mad',
//         ssmlResponse: 'Sorry, I am happy now',
//         nextIdentifier: "con-4"
//     }
// }]

// const conversations = [
//   {
//     conversationIdentifier: "con-1",
//     triggerArray: ["enthusiastically", "ready", "fanciest", "world"],
//     yes: {
//       mood: "happy",
//       ssmlResponse: "Let's have a tea party!",
//       action: "giggling",
//       nextIdentifier: "con-2",
//     },
//   },
//   {
//     conversationIdentifier: "con-2",
//     triggerArray: ["okay", "yes", "sure", "let's go"],
//     yes: {
//       mood: "surprise",
//       ssmlResponse: "I will go bring the tea set.",
//       action: "giggling",
//       nextIdentifier: "con-3",
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: "I really wanted to have the tea party now",
//       action: "pouting",
//       nextIdentifier: "con-4",
//     },
//   },
//   {
//     conversationIdentifier: "con-3",
//     triggerArray: ["come", "with you", "join", "along"],
//     yes: {
//       mood: "neutral",
//       ssmlResponse: "Can you help me bring the tea set down?",
//       action: "crossing her arms",
//       nextIdentifier: null,
//     },
//     no: {
//       mood: "disgust",
//       ssmlResponse: "Please come with me. I need your help.",
//       action: "giggling",
//       nextIdentifier: null,
//     },
//   },
//   {
//     conversationIdentifier: "con-4",
//     triggerArray: ["okay", "yes", "sure", "let's go"],
//     yes: {
//       mood: "happy",
//       ssmlResponse: "Yayyy!",
//       action: "crossing her arms",
//       nextIdentifier: null,
//     },
//     no: {
//       mood: "sad",
//       ssmlResponse: "Please?",
//       action: "giggling",
//       nextIdentifier: null,
//     },
//   },
// ];

const synonymsOne = [
  "I don't wanna eat!",
  "I not hungry!",
  "I don't like food!",
  "I don't feel like eating!",
  "I not hungry right now!",
  "I don't want any food!",
  "I no want to eat!",
  "I don't want dinner!",
  "I not hungry for food!",
  "I not hungry, mama!",
];

const synonymsTwo = [
  "Mommy took my toy 'cause I didn't eat!",
  "Mommy took my toy 'cause I didn't finish my food!",
  "Mommy took away my toy 'cause I didn't eat!",
  "Mommy took away my toy 'cause I didn't finish my food!",
  "Mommy took my toy 'cause I didn't want to eat!",
  "Mommy took away my toy 'cause I didn't want to eat!",
  "Mommy took my toy 'cause I didn't like my food!",
  "Mommy took away my toy 'cause I didn't like my food!",
  "Mommy took my toy 'cause I didn't want my food!",
  "Mommy took away my toy 'cause I didn't want my food!",
];

function randly(synonyms) {
  console.log("🚀 ~ pickRandomSynonym ~ synonyms:", synonyms);
  const randomIndex = Math.floor(Math.random() * synonyms.length);
  console.log("🚀 ~ pickRandomSynonym ~ randomIndex:", randomIndex);
  return synonyms[randomIndex];
}

const conversations = [
  {
    conversationIdentifier: "con-1",
    triggerArray: ["ready", "What", "How", "Hi"],
    yes: {
      mood: "angry",
      ssmlResponse: randly(synonymsOne),
      action: "Crying",
      nextIdentifier: "con-2",
    },
  },
  {
    conversationIdentifier: "con-2",
    triggerArray: ["Why", "What", "Happenned", "Who"],
    yes: {
      mood: "angry",
      ssmlResponse: randly(synonymsTwo),
      action: "Crying",
      nextIdentifier: "con-1",
    },
    no: {
      mood: "angry",
      ssmlResponse: ["I want my toy"],
      action: "Crying",
      nextIdentifier: "con-3",
    },
  },
  {
    conversationIdentifier: "con-3",
    triggerArray: ["let's", "make", "deal", "come to"],
    yes: {
      mood: "angry",
      ssmlResponse: ["What deal? I don't want any deal"],
      action: "crossing her arms",
      nextIdentifier: "con-4",
    },
    no: {
      mood: "angry",
      ssmlResponse: ["I want my toy back!"],
      action: "giggling",
      nextIdentifier: "con-4",
    },
  },
  {
    conversationIdentifier: "con-4",
    triggerArray: ["Give", "toy", "eat", "food", "lunch"],
    yes: {
      mood: "angry",
      ssmlResponse: ["No! You first give me my toy back!"],
      action: "crossing her arms",
      nextIdentifier: "con-5",
    },
    no: {
      mood: "angry",
      ssmlResponse: ["Why did she take my toy! I won't eat my lunch"],
      action: "giggling",
      nextIdentifier: "con-5",
    },
  },
  //   {
  //     conversationIdentifier: "con-5",
  //     triggerArray: ["mad", "angry", "crazy"],
  //     yes: {
  //       mood: "angry",
  //       ssmlResponse: "Yes",
  //       action: "crossing her arms",
  //       nextIdentifier: null,
  //     },
  //     no: {
  //       mood: "angry",
  //       ssmlResponse: "No",
  //       action: "giggling",
  //       nextIdentifier: "con-5",
  //     },
  //   },
];

// ? When we run out of script we can look through all the trigger array to find the best match with the current sentence and then use that conversationIdentifier
