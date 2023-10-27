import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'hovrth' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div>
      <label>
        English
        <input
          type="radio"
          name="language"
          value="en"
          checked={currentLanguage === 'en'}
          onChange={toggleLanguage}
        />
      </label>
      <label>
        Horvath
        <input
          type="radio"
          name="language"
          value="hovrth"
          checked={currentLanguage === 'hovrth'}
          onChange={toggleLanguage}
        />
      </label>
    </div>
  );
};

export default LanguageSwitcher;
