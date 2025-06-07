chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.audible && tab.audible) {
    handleMediaStart(tab);
  }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  const result = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const media = document.querySelector("video, audio");
      return !!(media && !media.paused);
    },
  }).catch(() => null);

  if (result?.[0]?.result === true) {
    handleMediaStart(tab);
  }
});

async function handleMediaStart(newTab) {
  const tabs = await chrome.tabs.query({ audible: true });

  for (const tab of tabs) {
    if (tab.id !== newTab.id && tab.audible) {
      await pauseTab(tab.id, tab.url);
    }
  }
}

async function pauseTab(tabId, url) {
  try {
    if (url.includes("youtube.com")) {
      await chrome.scripting.executeScript({
        target: { tabId },
        func: () => {
          const media = document.querySelector("video");
          if (media && !media.paused) media.pause();
        }
      });
    } else if (url.includes("spotify.com")) {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ["spotify-pause.js"]
      });
    }
  } catch (e) {
    console.warn("Error pausing tab:", tabId, e);
  }
}
