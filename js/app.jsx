import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader.jsx';
import ContactList from './ContactList.jsx';
import FilterUsers from '/FilterUsers.jsx';

class MainComponent extends React.Component {


    render() {
        return (
            <div>
                <AppHeader/>
                <FilterUsers/>
                <main className="mainContactList">
                    <ContactList/>
                </main>
            </div>
        );
    }
}

const App = () => (
    <div>
        <MainComponent/>
    </div>
);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});