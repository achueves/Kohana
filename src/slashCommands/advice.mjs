import fetch from 'node-fetch'

export const commandLogic = async interaction => {

    const advice = await fetch('https://api.adviceslip.com/advice');
    const adviceJSON = await advice.json();

    interaction.createMessage({"embeds": [{"title": "Advice:","description": adviceJSON.slip.advice,"color": 2717868}]}).catch(err => console.error("Cannot send messages to this channel", err));
}

export const description = "Some random advice"

export const category = "Fun" 