import React from 'react';
import ContactItem from "./ContactItem.jsx";

export default class ContactList extends React.Component {

    render() {
        return (
            <div>
                <ul className="itemList">
                    <ContactItem
                        name="Marek"
                        department="Makler"
                    />
                    <ContactItem
                        name="Paweł"
                        department="Hydraulik"
                    />
                    <ContactItem
                        name="Agnieszka"
                        department="Nauczycielka"
                    />
                </ul>
            </div>
        );
    }
}