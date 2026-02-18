document.getElementById('archiveBtn').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0] && tabs[0].url) {
      var currentUrl = tabs[0].url;
      if (currentUrl.startsWith('http')) {
        var archiveUrl = 'https://archive.ph/?run=1&url=' + encodeURIComponent(currentUrl);
        chrome.tabs.create({ url: archiveUrl });
      } else {
        document.getElementById('status').textContent = 'cant archive this page';
      }
    }
  });
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  if (tabs[0] && tabs[0].url) {
    var url = tabs[0].url;
    if (url.length > 50) {
      url = url.substring(0, 50) + '...';
    }
    document.getElementById('status').textContent = url;
  }
});
