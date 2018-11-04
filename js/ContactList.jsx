import React from 'react';
import ContactItem from "./ContactItem.jsx";

export default class ContactList extends React.Component {

    render() {
        return (
            <div>
                <ul className="itemList">
                    <ContactItem login="typeOfWeb1" name="Marek" department="Makler"/>
                    <ContactItem login="typeOfWeb2" name="Paweł" department="Hydraulik"/>
                    <ContactItem login="typeOfWeb3" name="Agnieszka" department="Nauczycielka"/>
                </ul>
            </div>
        );
    }
}