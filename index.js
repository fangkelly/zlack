container = document.getElementById("container")
let active = true
const ADJECTIVE=["fire", "lit", "goated", "extra", "slay", "bussin", 
"valid", "mid", "cancelled", "extra" , "sus", "drippy", "mood", 
"shook", "big yikes", "deadass", "gas", 'pressed']
const ADVERB=["highkey", "lowkey", "deadass", "actually", "literally", "totally"]
const NOUN_1=["Karen", "simp", "bestie", "NCP", "fam", "stan", "GOAT", "sis", "snack", "homie", "queen"]
const VERB_1=["flexing", "slaying", "pushing P", "stanning", "catching these hands",
"gaslighting", "gatekeeping", "girlbossing", "sending me", "throwing shade", "living in my head rent free", 
"yeeting", "hitting different", "gaslighting, gatekeeping, girlbossing"]
const EXCLAMATION=["l + ratio", "sheesh", "W", "af", "no cap", "tbh", "iykyk", "bet", "i'm weak", "let's goo",
"but go off i guess", "check", "im dead", "im deceased", "pog", "love that for you", "pull up", "you feel", "facts no printer", "yeet"]
const START=["pov", "mfw", "say less", "for real", "tbh", "wake up honey", "bruh", "yo", "sis", "aint no way", "bro"]
const NOUN_0 = ["i", "you", "she", "he", "they"]
const VERB_0 = {
    "you":"are",
    "she":"is",
    "he":"is",
    "i":"am",
    "they":"are"
}


function create_sentence(type, start, noun_0, noun_1, verb_0, verb_1, adjective, adverb, exclamation) {
    if (type == 0) {
        return [start, noun_0, verb_0, adverb, adjective, exclamation]
    } else if (type == 1){
        return [start, noun_0, verb_0, adverb, "a", noun_1, exclamation]
    } else if (type == 2){
        return [start, noun_0, verb_0, adverb, verb_1, exclamation]
    }
}
    

function print_sentence(){
    const start = START[Math.floor(Math.random() * START.length)]
    const noun_0 = NOUN_0[Math.floor(Math.random() * NOUN_0.length)]
    const noun_1 = NOUN_1[Math.floor(Math.random() * NOUN_1.length)]
    const verb_0 = VERB_0[noun_0]
    const verb_1 = VERB_1[Math.floor(Math.random() * VERB_1.length)]
    const adjective = ADJECTIVE[Math.floor(Math.random() * ADJECTIVE.length)]
    const adverb = ADVERB[Math.floor(Math.random() * ADVERB.length-1)]
    const exclamation = EXCLAMATION[Math.floor(Math.random() * EXCLAMATION.length)]
    const sentence = create_sentence(Math.floor(Math.random() * 3), start, noun_0, noun_1, verb_0, verb_1, adjective, adverb, exclamation)
    return(sentence.join(" "))
}


function addMessage(sender) {
    let row = document.createElement('div')
    row.classList.add(`${sender?"sender":"receiver"}-row`)
    row.classList.add(`message-row`)
    let bubble = document.createElement('div')
    bubble.classList.add('message-bubble')
    bubble.classList.add(`${sender?"sender":"receiver"}`)
    let text = document.createTextNode(print_sentence());
    bubble.append(text)
    row.appendChild(bubble)
    container.appendChild(row)
    container.scrollTop = container.scrollHeight;
}


function start() {
    console.log("active ", active)
    if (active) {    
        console.log("active ", active)
        addMessage(true)
        active = false
        document.getElementById("button").classList.add("disable")
        console.log("active ", active)
        setTimeout(function(){
            addMessage(false)
            document.getElementById("button").classList.remove("disable")
            active = true
        },1000);
     }
  };