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

// const conversations = [
//   {
//     conversationIdentifier: "con-1",
//     triggerArray: ["ready", "What", "How", "Hi"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: [
//         "I don't wanna eat!",
//         "I don't feel like eating!",
//         "I don't want any food!",
//         "I no want to eat!",
//         "I don't want dinner!",
//       ],
//       action: "Crying",
//       nextIdentifier: "con-2",
//     },
//   },
//   {
//     conversationIdentifier: "con-2",
//     triggerArray: ["Why", "What", "Happenned", "Who"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: [
//         "Mommy took my toy 'cause I didn't eat!",
//         "Mommy took my toy 'cause I didn't finish my food!",
//         "Mommy took away my toy 'cause I didn't eat!",
//         "Mommy took away my toy 'cause I didn't finish my food!",
//         "Mommy took my toy 'cause I didn't want to eat!",
//         "Mommy took away my toy 'cause I didn't want to eat!",
//         "Mommy took my toy 'cause I didn't like my food!",
//         "Mommy took away my toy 'cause I didn't like my food!",
//         "Mommy took my toy 'cause I didn't want my food!",
//         "Mommy took away my toy 'cause I didn't want my food!",
//       ],
//       action: "Crying",
//       nextIdentifier: "con-3",
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: [
//         "I want my toy",
//         "I want my toy back!",
//         "Please don't take my toy away from me.",
//         "I miss playing with my toy.",
//         "I want to play with my toy.",
//         "I want it right now!",
//         "Can I have my toy back?",
//         "Can you give me my toy back?",
//       ],
//       action: "Crying",
//       nextIdentifier: "con-3",
//     },
//   },
//   {
//     conversationIdentifier: "con-3",
//     triggerArray: ["let's", "make", "deal", "come to"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: [
//         "What deal? I don't want any deal",
//         "No way, I'm not doing it!",
//         "I don't like vegetables, they're yucky!",
//         "I don't want to eat my food!",
//         "I don't want to eat my lunch!",
//         "I don't want to hear it!",
//         "I don't want to make a deal!",
//       ],
//       action: "crossing her arms",
//       nextIdentifier: "con-4",
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: [
//         "I want my toy!",
//         "I need my toy!",
//         "I miss my toy!",
//         "I want my toy now!",
//         "I want my toy back, please!",
//         "I want my toy back, now!",
//         "I really want my toy!",
//         "I want my toy so bad!",
//         "I want my toy again!",
//         "I want my toy right here!",
//       ],
//       action: "giggling",
//       nextIdentifier: "con-4",
//     },
//   },
//   {
//     conversationIdentifier: "con-4",
//     triggerArray: ["Give", "toy", "eat", "food", "lunch"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: [
//         "No! I want my toy first!",
//         "No! Give me my toy first!",
//         "No! I need my toy back first!",
//         "No! I want my toy now!",
//         "No! My toy first, please!",
//         "No! I won't until I get my toy!",
//         "No! I want my toy right now!",
//         "No! My toy back first, please!",
//         "No! I want my toy immediately!",
//         "No! I won't until I have my toy!",
//       ],
//       action: "crossing her arms",
//       nextIdentifier: "con-5",
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: [
//         "Why she take my toy! I no want my lunch!",
//         "She take my toy! I not eat my lunch!",
//         "She took my toy! I don't wanna eat my lunch!",
//         "Why she take my toy! I not hungry for lunch!",
//         "She take my toy! I don't want lunch!",
//         "Why she take my toy! I don't feel like eating my lunch!",
//         "She took my toy! I don't want my lunch!",
//         "Why she take my toy! I not hungry, mama!",
//         "She take my toy! I don't like lunch!",
//         "Why she take my toy! I don't want to eat my lunch!",
//       ],
//       action: "giggling",
//       nextIdentifier: "con-5",
//     },
//   },
//   {
//     conversationIdentifier: "con-5",
//     triggerArray: ["I'm", "not", "giving", "toy", "don't lunch"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: [
//         "This bad! Give toy to me!",
//         "I no like this! Want my toy!",
//         "This not fun! Need my toy!",
//         "This yucky! Want my toy now!",
//         "This not okay! Want toy!",
//         "This not nice! I want my toy!",
//         "This no good! Give me toy!",
//         "This not fun! Give my toy!",
//         "This stinky! Give me my toy!",
//         "This not good! Want my toy now!",
//       ],
//       action: "crossing her arms",
//       nextIdentifier: "con-6",
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: [
//         "I wanna play with my toy car!",
//         "I wanna drive my toy car!",
//         "I want to play with my car toy!",
//         "I want my toy car for playing!",
//         "I want to have fun with my toy car!",
//         "I wanna have fun with my toy car!",
//         "I wanna enjoy my toy car!",
//         "I want my toy car to play!",
//         "I want to play with my little car!",
//         "I wanna play with my favorite toy car!",
//       ],
//       action: "giggling",
//       nextIdentifier: "con-6",
//     },
//   },
//   {
//     conversationIdentifier: "con-6",
//     triggerArray: ["Okay", "Will", "give", "toy", "car"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: [
//         "No! I know you won't give me my toy!",
//         "Nooo! You not gonna give me my toy!",
//         "No way! I know you won't give me my toy!",
//         "I don't believe you! You not gonna give me my toy!",
//         "I don't trust you! You won't give me my toy!",
//         "I don't think so! You not gonna give me my toy!",
//         "I know! You won't give me my toy!",
//         "I not believe you! You not gonna give me my toy!",
//         "I not sure! You won't give me my toy!",
//         "I know it! You not gonna give me my toy!",
//       ],
//       action: "crossing her arms",
//       nextIdentifier: "con-7",
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: [
//         "I won't have food until I get my toy!",
//         "I'm not eating until I have my toy!",
//         "I won't eat until I have my toy, okay?",
//         "I'm holding out on eating until I get my toy!",
//         "No food until I have my toy, okay?",
//         "I'm not touching my food until I get my toy!",
//         "Not eating until I get my toy, okay?",
//         "I'll wait for my toy before eating!",
//         "I won't touch my food until you give me my toy!",
//         "I'm waiting for my toy before eating!",
//       ],
//       action: "giggling",
//       nextIdentifier: "con-7",
//     },
//   },
//   {
//     conversationIdentifier: "con-7",
//     triggerArray: ["mad", "angry", "crazy"],
//     yes: {
//       mood: "angry",
//       ssmlResponse: ["Yes", "Yes"],
//       action: "crossing her arms",
//       nextIdentifier: null,
//     },
//     no: {
//       mood: "angry",
//       ssmlResponse: ["No"],
//       action: "giggling",
//       nextIdentifier: "con-7",
//     },
//   },
// ];
const conversations = [
	{
		conversationIdentifier: "con-1",
		triggerArray: ["ready"],
		yes: {
			mood: "angry",
			ssmlResponse: [`Let's go`],
			action: "Crying",
			nextIdentifier: "1000_2",
		},
	},
	{
		conversationIdentifier: "1000_2",
		triggerArray: ["lets", "go"],
		yes: {
			mood: "angry",
			ssmlResponse: [
				` Hi.  I'm just a little kid.  right? <break time="0.5s"/>but, I am smarter than you. <break time="0.5s"/> do you agree that i am smarter than you?`,
			],
			action: "Crying",
			nextIdentifier: "1001_yes",
		},
		no: {
			mood: "angry",
			ssmlResponse: [`hey man, you gotta say lets go to begin`],
			action: "Crying",
			nextIdentifier: "1000_2",
		},
	},
	{
		conversationIdentifier: "1001_yes",
		triggerArray: ["yes"],
		yes: {
			mood: "angry",
			ssmlResponse: [
				"you said.  #userJustSaid . but, now i'm worried. You should respect your own intelligence.  Let's try again.",
			],
			action: "Crying",
			nextIdentifier: "pandora",
		},
		no: {
			mood: "angry",
			ssmlResponse: [
				"Did you just say? #userJustSaid. what do you mean by that?",
			],
			action: "Crying",
			nextIdentifier: "1001_no",
		},
	},
	{
		conversationIdentifier: "1001_no",
		triggerArray: ["yes"],
		yes: {
			mood: "angry",
			ssmlResponse: [
				"Wait.  Do you think you are smart?  or, do you think that I am, not, that, smart.",
			],
			action: "Crying",
			nextIdentifier: "1002_no_default",
		},
		yes: {
			mood: "angry",
			ssmlResponse: [
				"Wait.  Do you think you are smart?  or, do you think that I am, not, that, smart.",
			],
			action: "Crying",
			nextIdentifier: "1002_no_default",
		},
	},
	{
		conversationIdentifier: "1002_no_default",
		triggerArray: ["yes"],
		yes: {
			mood: "angry",
			ssmlResponse: [],
			action: "crossing her arms",
			nextIdentifier: "1002_no_default",
		},
		no: {
			mood: "angry",
			ssmlResponse: [
				"Wait.  Do you think you are smart?  or, do you think that I am, not, that, smart.",
			],
			action: "giggling",
			nextIdentifier: "1002_no_default",
		},
	},
	{
		conversationIdentifier: "1002_no_default",
		triggerArray: ["yes"],
		yes: {
			mood: "angry",
			ssmlResponse: [
				"No! I want my toy first!",
				"No! Give me my toy first!",
				"No! I need my toy back first!",
				"No! I want my toy now!",
				"No! My toy first, please!",
				"No! I won't until I get my toy!",
				"No! I want my toy right now!",
				"No! My toy back first, please!",
				"No! I want my toy immediately!",
				"No! I won't until I have my toy!",
			],
			action: "crossing her arms",
			nextIdentifier: "1003_no_default",
		},
		no: {
			mood: "angry",
			ssmlResponse: [
				"Why she take my toy! I no want my lunch!",
				"She take my toy! I not eat my lunch!",
				"She took my toy! I don't wanna eat my lunch!",
				"Why she take my toy! I not hungry for lunch!",
				"She take my toy! I don't want lunch!",
				"Why she take my toy! I don't feel like eating my lunch!",
				"She took my toy! I don't want my lunch!",
				"Why she take my toy! I not hungry, mama!",
				"She take my toy! I don't like lunch!",
				"Why she take my toy! I don't want to eat my lunch!",
			],
			action: "giggling",
			nextIdentifier: "1003_no_default",
		},
	},
	{
		conversationIdentifier: "1003_no_default",
		triggerArray: ["yes"],
		yes: {
			mood: "angry",
			ssmlResponse: [
				"This bad! Give toy to me!",
				"I no like this! Want my toy!",
				"This not fun! Need my toy!",
				"This yucky! Want my toy now!",
				"This not okay! Want toy!",
				"This not nice! I want my toy!",
				"This no good! Give me toy!",
				"This not fun! Give my toy!",
				"This stinky! Give me my toy!",
				"This not good! Want my toy now!",
			],
			action: "crossing her arms",
			nextIdentifier: "pandora",
		},
		no: {
			mood: "angry",
			ssmlResponse: [
				"I wanna play with my toy car!",
				"I wanna drive my toy car!",
				"I want to play with my car toy!",
				"I want my toy car for playing!",
				"I want to have fun with my toy car!",
				"I wanna have fun with my toy car!",
				"I wanna enjoy my toy car!",
				"I want my toy car to play!",
				"I want to play with my little car!",
				"I wanna play with my favorite toy car!",
			],
			action: "giggling",
			nextIdentifier: "pandora",
		},
	},
	{
		conversationIdentifier: "pandora",
		triggerArray: ["yes"],
		yes: {
			mood: "angry",
			ssmlResponse: ["Text from pandora"],
			action: "crossing her arms",
			nextIdentifier: "pandora",
		},
		no: {
			mood: "angry",
			ssmlResponse: ["text from pandora"],
			action: "giggling",
			nextIdentifier: "pandora",
		},
	},
	// {
	// 	conversationIdentifier: "con-7",
	// 	triggerArray: ["mad", "angry", "crazy"],
	// 	yes: {
	// 		mood: "angry",
	// 		ssmlResponse: ["Yes", "Yes"],
	// 		action: "crossing her arms",
	// 		nextIdentifier: null,
	// 	},
	// 	no: {
	// 		mood: "angry",
	// 		ssmlResponse: ["No"],
	// 		action: "giggling",
	// 		nextIdentifier: "con-7",
	// 	},
	// },
];

// ? When we run out of script we can look through all the trigger array to find the best match with the current sentence and then use that conversationIdentifier
