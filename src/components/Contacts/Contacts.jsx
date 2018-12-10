import React from 'react';
import './Contacts.css';
import VkLogo from '../../icons/vk-com.png';
import GitHubLogo from '../../icons/github.png';

const App = () => {
  return (
    <div className="contacts">
      <h2>Created by Eugene Panteleyev</h2>
      <p>Around the web</p>
      <a href="https://vk.com/jenyoc1">
        <img alt="vkLogo"
             src={VkLogo} /></a>
      <a href="https://github.com/Jenyoc">
        <img alt="githubLogo"
             src={GitHubLogo} /></a>
      <p className="email">evgeniy.panteleev.94@inbox.ru</p>
    </div>
  )
};

export default App;
