chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "bypass-paywalls",
    title: "Tear down the wall!",
    contexts: ["page", "link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "bypass-paywalls") {
    const targetUrl = info.linkUrl || info.pageUrl;
    const archiveUrl = `https://archive.ph/${targetUrl}`;
    // Opens new tab, not sure if thats preffered or not? Might add the ability to swap to open in same window in future.
    chrome.tabs.create({ 
      url: archiveUrl,
      index: tab.index + 1 
    });
  }
});


//woah you read source code :) 
