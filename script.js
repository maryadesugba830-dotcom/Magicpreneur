function openZendeskForm() {
  if (window.zE) {
    zE('webWidget', 'open');
    zE('webWidget', 'activate', 'contactForm');
  }
}

