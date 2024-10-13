function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'zh-TW',
      autoDisplay: false,
      includedLanguages: 'zh-TW,zh-CN,en,ja,ko',
      layout: google.translate.TranslateElement.InlineLayout.VERTICAL
    }, 'google_translate_element');
  }

  function goTranslate(lang) {
    const translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo) {
      translateCombo.value = lang;
      translateCombo.dispatchEvent(new Event('change'));
    } else {
      console.log('Google Translate combo box not found.');
    }
  }
  window.onload = function() {
    googleTranslateElementInit();
  };

  