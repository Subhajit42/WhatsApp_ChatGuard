chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: 'OFF'
    });
  });

const extension = "https://web.whatsapp.com/";

//Function
function revertBlur() {
    uE = document.getElementsByClassName("upperElement")[0];
    uE.style.backdropFilter = "revert";
}


chrome.action.onClicked.addListener(async (tab) => {
if (tab.url.startsWith(extension)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
    });


    if (nextState === 'ON') {

        chrome.scripting.executeScript({
          target : {tabId : tab.id},
          files : [ "scripts/content.js" ],
        })
        .then(() => console.log("script injected"));
    
    
    
      } else if (nextState === 'OFF') {
    
        chrome.scripting.executeScript({
          target : {tabId : tab.id},
          func : revertBlur,
        })
        .then(() => console.log("script injected revert done"));
      }

}
})