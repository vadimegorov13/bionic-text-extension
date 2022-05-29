console.log("background script")

const buttonClicked = (tab) => {
   chrome.tabs.sendMessage(tab.id, "hello")
}

chrome.action.onClicked.addListener(buttonClicked)
