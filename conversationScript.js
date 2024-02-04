const conversations = [{
    conversationIdentifier: 'init',
    triggerArray: ['why', 'sad', 'hurt'],
    yes: {
        mood: 'sad',
        ssmlResponse: 'I am not being noticed',
        nextIdentifier: "con-2"
    },
    no: {
        mood: 'mad',
        ssmlResponse: 'Sorry, I am happy now',
        nextIdentifier: "con-2"
    }
}, {
    conversationIdentifier: 'con-2',
    triggerArray: ['who', 'not', 'notic'],
    yes: {
        mood: 'sad',
        ssmlResponse: 'Why are you like this?',
        nextIdentifier: "con-3"
    },
    no: {
        mood: 'mad',
        ssmlResponse: 'Sorry, I am happy now',
        nextIdentifier: "con-3"
    }
}, {
    conversationIdentifier: 'con-3',
    triggerArray: ['who', 'not', 'notic'],
    yes: {
        mood: 'happy',
        ssmlResponse: 'Why do you ignore me?',
        nextIdentifier: "con-4"
    },
    no: {
        mood: 'mad',
        ssmlResponse: 'Sorry, I am happy now',
        nextIdentifier: "con-4"
    }
}]