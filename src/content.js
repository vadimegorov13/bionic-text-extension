console.log("Chrome Content Manipulator")

let paragraphs = document.getElementsByTagName("p")

for (p of paragraphs){
    console.log(p)
}

const gotMessage = (message, sender, sendResponse) => {
    console.log(message)
}

chrome.runtime.onMessage.addListener(gotMessage)

