function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let url = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(url.includes(inputText)) {
        alert("Welcome, Captain!");
    }
    else {
        return 404;
    }
}

export { checkForName }


// function checkForName(inputText) {
//     console.log("::: Running checkForName :::", inputText);
//     let url = ''

//     if(url.includes(inputText)) {
//         alert("Welcome, Captain!");
//     }
//     else {
//         alert("Please enter correct web address")
//     }
// }

// export { checkForName }
