import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discord from './components/Discord';
import WebDevOverview from './components/WebDevOverview';
import PasswordManagement from './components/PasswordManagement';
import MediaCard from './components/MediaCard';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/discord'>
        <Discord />
      </Route>
      <Route path='/blog-post-1'>
        <WebDevOverview />
      </Route>
      <Route path='/blog-post-2'>
        <PasswordManagement />
      </Route>
      <Route path='/contact'>
        <MediaCard serviceName="Discord" serviceImgPath="https://cdn.discordapp.com/attachments/303544651200331776/858715171147743232/Discord-Logo-Color.png" serviceURL="https://discordapp.com" local={false}/>
      </Route>
      <Route path='/about'>
        <AboutMe />
      </Route>
    </Switch>  
    </>  
      
  );
}

export default App;
