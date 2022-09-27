container = document.getElementById("container")
let active = true
const ADJECTIVE=["fire","lit","goated","extra","slay","bussin","valid","mid",
"cancelled","extra","sus","drippy","mood","shook","deadass","gas",'pressed']
const ADVERB=["highkey","lowkey","deadass","actually","literally","totally"]
const NOUN_1=["Karen","simp","bestie","NCP","fam","stan","GOAT","sis","snack", 
"homie", "queen"]
const VERB_1=["flexing","slaying","stanning","catching these hands",
"gaslighting","gatekeeping","girlbossing","sending me","throwing shade", 
"living in my head rent free","hitting different","tripping", "caught lacking",
"gaslighting, gatekeeping, girlbossing"]
const EXCLAMATION=["l + ratio","sheesh","W","af","no cap","tbh","iykyk","bet",
"i'm weak","let's goo","but go off i guess","check","im dead","im deceased",
"pog","love that for you","pull up","you feel","facts no printer","yeet"]
const START=["pov","mfw","say less","for real","tbh","wake up honey","bruh",
"yo","sis","aint no way","bro","my bad"]
const NOUN_0 = ["I", "You"]
const VERB_0 = {"You":"are","I":"am",}
const START_A=["Going forward ","I hear what you are saying.","Bottom line is:", 
"Thanks for your insight.","I'm not sure that's the direction we want to take.", 
"Can you elaborate?","We'll keep that in mind.",
"Let's try to stay on topic, that can be discussed another time."]
const VERB_A=["touching base on","circling back to","executing","optimizing",
"finalizing","addressing","maximizing","brainstorming","prepping","reviewing",
"terminating"]
const NOUN_A=["some low hanging fruit","the deliverable","the quarter report", 
"numbers","the evaluation","your performance","the return on investment",
"the project"]
const PREPOSITION=["for", "with", "alongside", "from"]
const NOUN_B=["the manager","our partners","our clients","your coworker",
"the stakeholders","some investors"]
const EXCLAMATION_A=["Due at the end of the day.", "Let's touch base offline.", 
"Can you take the lead on that?", "ASAP", "Let's discuss after the meeting.",
"Let me know if the instructions were unclear.", "Thanks.", 
"Thanks for all your hard work.", "Glad to have you on the team."]
const MODAL = ["should", "will", "can", "could"]

function create_sentence(type, start, noun_0, noun_1, verb_0, verb_1, adjective, 
    adverb, exclamation) {return type == 0 ? [start, noun_0, verb_0, adverb, 
        adjective, exclamation]:type == 1 ? [start, noun_0, verb_0, adverb, "a",
        noun_1, exclamation]:[start,noun_0,verb_0,adverb,verb_1,exclamation]}
    
function create_sentence_A(type,start,noun_0,noun,verb,exc,prep,noun_b,noun_01,
    verb_1,noun_1,prep_1,noun_b1,verb_0,verb_01) {return type === 0 ? [start, 
        noun_0,verb_0,verb,noun,prep,noun_b+".", exc]:[start, noun_0, verb_0, 
            verb,noun,prep,noun_b,"and",noun_01,verb_01,verb_1,noun_1,prep_1,
            noun_b1+".", exc]}
    
function print_sentence(sender){let sentence
   if (sender) {
    const start = START[Math.floor(Math.random() * START.length)]
    const noun_0 = NOUN_0[Math.floor(Math.random() * NOUN_0.length)]
    const noun_1 = NOUN_1[Math.floor(Math.random() * NOUN_1.length)]
    const verb_0 = VERB_0[noun_0]
    const verb_1 = VERB_1[Math.floor(Math.random() * VERB_1.length)]
    const adjective = ADJECTIVE[Math.floor(Math.random() * ADJECTIVE.length)]
    const adverb = ADVERB[Math.floor(Math.random() * ADVERB.length-1)]
    const exclamation=EXCLAMATION[Math.floor(Math.random()*EXCLAMATION.length)]
    const sentence = create_sentence(Math.floor(Math.random() * 3), start, 
    noun_0.toLowerCase(),noun_1,verb_0,verb_1, adjective, adverb, exclamation)
    return(sentence.join(" "))
   } else {
    const start = START_A[Math.floor(Math.random() * START_A.length)]
    const exc = EXCLAMATION_A[Math.floor(Math.random() * EXCLAMATION_A.length)]
    const noun_0 = NOUN_0[Math.floor(Math.random() * NOUN_0.length)]
    const prep = PREPOSITION[Math.floor(Math.random() * PREPOSITION.length)]
    const noun_b = NOUN_B[Math.floor(Math.random() * NOUN_B.length)]
    const noun =NOUN_A[Math.floor(Math.random() * NOUN_A.length)]
    const verb =VERB_A[Math.floor(Math.random() * VERB_A.length)]
    const verb_0=VERB_0[noun_0]

    const noun_01=NOUN_0[Math.floor(Math.random() * NOUN_0.length)]
    const verb_01=VERB_0[noun_01]
    const verb_1 =VERB_A[Math.floor(Math.random() * VERB_A.length)]
    const noun_1 =NOUN_A[Math.floor(Math.random() * NOUN_A.length)]
    const prep_1 = PREPOSITION[Math.floor(Math.random() * PREPOSITION.length)]
    const noun_b1 = NOUN_B[Math.floor(Math.random() * NOUN_B.length)]
    const sentence = create_sentence_A(Math.floor(Math.random() * 2), 
    start,noun_0,noun,verb,exc,prep,noun_b,noun_01,verb_1,noun_1,prep_1,noun_b1,
    verb_0, verb_01)
    return(sentence.join(" "))
   }}

   function addMessage(sender) {let row = document.createElement('div')
    row.classList.add(`${sender?"sender":"receiver"}-row`)
    row.classList.add(`message-row`)
    let bubble = document.createElement('div')
    bubble.classList.add('message-bubble')
    bubble.classList.add(`${sender?"sender":"receiver"}`)
    let text = document.createTextNode(print_sentence(sender));
    bubble.append(text)
    row.appendChild(bubble)
    container.appendChild(row)
    container.scrollTop = container.scrollHeight;}

function start() {
    if (active) {    
        addMessage(true)
        active = false
        document.getElementById("button").classList.add("disable")
        setTimeout(function(){
            addMessage(false)
            document.getElementById("button").classList.remove("disable")
            active = true
        },1000);
     }
  };