import React, { createContext, useContext, useState } from 'react';
const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('eng');
  const content = {
    uzb: {
      logo: 'SIZNING LOGO',
      assets: 'Aktivlar',
      creators: 'Yasovchilar',
      careers: 'Karyera',
      goPro: "Professional bo'lish",
      login: 'Kirish',
      signup: "Ro'yxatdan o'tish",
      securitySolution: 'XAVFSIZLIK YECHIMI',
      trackLovedOnes: 'Yaqiningizni real vaqt rejimida kuzatib boring!',
      notice: 'Biz dunyoda xavfsizlik darajasining yuqoriligini kuzatdik...',
      joinWaitlist: "Kutish ro'yxatimizga qo'shiling!",
      notify: "Mahsulot tayyor bo'lganda birinchi bo'lib xabardor bo'ling!",
      emailPlaceholder: 'Sizning elektron pochta manzilingiz',
      joinList: "Ro'yxatga qo'shilish",
    },
    rus: {
      logo: 'ВАШ ЛОГО',
      assets: 'Активы',
      creators: 'Создатели',
      careers: 'Карьера',
      goPro: 'Стать профессионалом',
      login: 'Войти',
      signup: 'Зарегистрироваться',
      securitySolution: 'РЕШЕНИЕ БЕЗОПАСНОСТИ',
      trackLovedOnes: 'Следите за вашими близкими в реальном времени!',
      notice: 'Мы заметили высокий уровень небезопасности в мире...',
      joinWaitlist: 'Присоединяйтесь к нашему списку ожидания!',
      notify: 'Будьте первым, кто узнает, когда продукт будет готов!',
      emailPlaceholder: 'Ваш адрес электронной почты',
      joinList: 'Присоединиться к списку',
    },
    eng: {
      logo: 'YOUR LOGO',
      assets: 'Assets',
      creators: 'Creators',
      careers: 'Careers',
      goPro: 'Go Pro',
      login: 'Log in',
      signup: 'Sign up',
      securitySolution: 'A SECURITY SOLUTION',
      trackLovedOnes: 'Keep track of your loved ones in real time!',
      notice: 'We noticed the high level of insecurity in the world...',
      joinWaitlist: 'Join Our Waitlist!',
      notify: 'Be the first to get notified when the product is ready!',
      emailPlaceholder: 'Your email address',
      joinList: 'Join List',
    },
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
