import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import iPhone from '../src/Images/iPhone.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
  const { language, setLanguage, content } = useLanguage();

  const notify = () => toast("Til o'zgardi");
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    notify();
  };

  return (
    <div className="font-sans">
      <header className="flex justify-between items-center py-4 px-8 bg-gray-100">
        <div className="text-xl font-bold">{content[language].logo}</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700">{content[language].assets}</a>
          <a href="#" className="text-gray-700">{content[language].creators}</a>
          <a href="#" className="text-gray-700">{content[language].careers}</a>
          <a href="#" className="text-gray-700">{content[language].goPro}</a>
        </div>

        <select 
          value={language} 
          onChange={handleLanguageChange}
          className="ml-8 p-2 border border-gray-300 rounded-md"
        >
          <option value="eng">Eng</option>
          <option value="rus">Rus</option>
          <option value="uzb">Uzb</option>
        </select>
        <ToastContainer />
        <div className="flex items-center space-x-4">
          <button className="text-gray-700">{content[language].login}</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">{content[language].signup}</button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-8 bg-blue-50">
        <div className='ml-20'>
          <div className="max-w-lg">
            <h4 className='mb-10'>{content[language].securitySolution}</h4>
            <h1 className="md:text-5xl font-bold text-violet-500 mb-8">{content[language].trackLovedOnes}</h1>
            <div className='flex'>
              <img src="" alt="" />
              <p className="text-gray-700 mb-8">{content[language].notice}</p>
            </div>
            <h3 className="text-4xl font-semibold mb-7">{content[language].joinWaitlist}</h3>
            <p>{content[language].notify}</p>
            <form className="flex space-x-4">
              <input type="email" placeholder={content[language].emailPlaceholder} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">{content[language].joinList}</button>
            </form>
          </div>
        </div>
        <div className="flex space-x-4 mt-8 md:mt-0 mr-10">
          <img src={iPhone} alt="" />
        </div>
      </section>
    </div>
  );
}

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
