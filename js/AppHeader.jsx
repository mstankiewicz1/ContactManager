import React from 'react';

export default class AppHeader extends React.Component {

    render() {
        return (
            <div>
                <thead>
                    <tr>
                        <img className="logoHeader" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
                        <h1 className="contactListHeader">Lista kontaktów</h1>
                        <button className="buttonHeader">Dodaj</button>
                    </tr>
                </thead>
            </div>
        );
    }
}



