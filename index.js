const ADJECTIVE=["fire", "lit", "goated", "extra", "slay", "bussin", 
"valid", "mid", "cancelled", "extra" , "sus", "drippy", "mood", 
"shook", "big yikes", "deadass", "gas", 'pressed']
const ADVERB=["highkey", "lowkey", "deadass", "actually", "literally", "totally"]
const NOUN_1=["Karen", "simp", "bestie", "NCP", "fam", "stan", "GOAT", "sis", "snack", "homie", "queen"]
const VERB_1=["flexing", "slaying", "pushing P", "stanning", "catching these hands",
"gaslighting", "gatekeeping", "girlbossing", "sending me", "throwing shade", "living in my head rent free", 
"yeeting", "hitting different", "gaslighting, gatekeeping, girlbossing"]
const VERB_2=["flex", "slay", "stan", "catch these hands", "drag",
"gaslight", "gatekeep", "girlboss", "throw shade", "lives in my head rent free", "yeet", "hit different", "slaps", "built different"]
const EXCLAMATION=["l + ratio", "sheesh", "W", "af", "no cap", "tbh", "iykyk", "bet", "i'm weak",
"but go off i guess", "check", "im dead", "im deceased", "pog", "love that for you", "pull up", "you feel", "facts no printer", "yeet"]
const START=["pov", "mfw", "say less", "for real", "tbh", "wake up honey", "bruh", "yo", "sis", "aint no way"]
const NOUN_0 = ["i", "you", "she", "he", "they"]
const VERB_0 = {
    "you":"are",
    "she":"is",
    "he":"is",
    "i":"am",
    "they":"are"
}



function create_sentence(type, start, noun_0, noun_1, verb_0, verb_1, verb_2, adjective, adverb, exclamation) {
    
    if (type == 0) {
        return [start, noun_0, verb_0, adverb, adjective, exclamation]
    }
    else if (type == 1){
        return [start, noun_0, verb_0, adverb, "a", noun_1, exclamation]
    }
    else if (type == 2){
        return [start, noun_0, verb_0, adverb, verb_1, exclamation]
    }
}
    

function print_sentence(){
    const start = START[randint(0, len(START)-1)]
    const noun_0 = NOUN_0[randint(0, len(NOUN_0)-1)]
    const noun_1 = NOUN_1[randint(0, len(NOUN_1)-1)]
    const verb_0 = VERB_0[noun_0]
    const verb_1 = VERB_1[randint(0, len(VERB_1)-1)]
    const verb_2 = VERB_2[randint(0, len(VERB_2)-1)]
    const adjective = ADJECTIVE[randint(0, len(ADJECTIVE)-1)]
    const adverb = ADVERB[randint(0, len(ADVERB)-1)]
    const exclamation = EXCLAMATION[randint(0, len(EXCLAMATION)-1)]

    const sentence = create_sentence(randint(0,2), start, noun_0, noun_1, verb_0, verb_1, verb_2, adjective, adverb, exclamation)
    return(sentence.join(" "))
}


window.addEventListener('load', (event) => {
    console.log("hi")
  });