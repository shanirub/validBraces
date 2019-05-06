
function validBraces(braces){
    let stack = [] 
    // implement as map instead of strings?
    let startChars = "([{"
    let endChars = ")]}"
    let topStack

    for(let i = 0; i < braces.length; i++) {
        
        if (startChars.indexOf(braces[i]) != -1) {       // start chars
            stack.push(braces[i])

        } else if (endChars.indexOf(braces[i]) != -1) {  // end chars
            if (stack.length == 0)
                return false
            
            topStack = stack.pop()
            if (topStack != startChars.charAt(endChars.indexOf(braces[i])))
                return false        // when the end brace doesn't match the start brace in stack
        }
    }
    if (stack.length != 0)
        return false

    return true
}

console.log("()  " + validBraces("()"))
