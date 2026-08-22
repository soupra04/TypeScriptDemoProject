function FirstNonRepeatingCharacterinString(str: string) { //geeksforgeeks

    for (let i = 0; i < str.length; i++) {
        let visited = false;

        for (let k = 0; k < i; k++) {
            if (str[i] == str[k]) {
                visited = true;
                break;
            }
        }
        if (visited == true) continue;
        let duplicate = false;
        for (let j = i + 1; j <= str.length - 1; j++) {
            if (str[i] == str[j]) {
                duplicate = true;
                break;

            }
        }

        if (!duplicate) {
            console.log("first non repeated element is found" + " " + str[i]);
            break;
            

        }



    }

}
FirstNonRepeatingCharacterinString("geeksforgeeks");