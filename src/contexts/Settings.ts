import React from 'react';

import { createHookContext } from '@/utils/hooks';

interface Settings {
  language: string;
  setLanguage: (lang: string) => void;
}

function useSettingsModel(): Settings {
  const [language, setLang] = React.useState('');

  const setLanguage = (lang: string) => {
    console.log(lang);
    setLang(lang);
  };

  return {
    language,
    setLanguage,
  };
}

export default createHookContext(useSettingsModel);
