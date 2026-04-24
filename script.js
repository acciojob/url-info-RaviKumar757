function showURLLength() {
  // Get current URL
  const url = window.location.href;

  // Get length of URL
  const length = url.length;

  // Show alert
  alert("The length of the URL is: " + length);
}

// Call function (you can also attach to a button)
showURLLength();