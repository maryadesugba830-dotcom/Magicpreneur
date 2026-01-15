function openZendeskForm() {
  if (window.zE) {
    zE('webWidget', 'open');
    zE('webWidget', 'activate', 'contactForm');
  } else {
    alert("Support system is still loading. Please try again shortly.");
  }
}
