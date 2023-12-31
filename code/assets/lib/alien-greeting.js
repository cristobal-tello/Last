export default function (message, inPeace = false) {

    setTimeout(() => {
        import('../styles/alien-greeting.css');     // We need run it as function
    }, 4000);
    
    console.log(`${message}! ${inPeace ? '👽' : '👾'}`);
}