import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <Dialogs
                           state={props.state.dialogsPage}/>}/>
                <Route exact path="/profile"
                       render={() => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}/>}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/music" component={Music}/>
                <Route exact path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
