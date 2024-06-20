
export function rubricPerfect(score) {

    if (score >= 11) {
        return "Perfect"
    }
    else {
        return "Try again"
    }
   
}

console.log (rubricPerfect)