import React from 'react';


export default class ContactItem extends React.Component {

    render() {
        return (
            <div>
                <li className="singleContact">
                    <h4 className="nameSingleContact">{this.props.name}</h4>
                    <div className="descriptionSingleContact">{this.props.department}</div>
                </li>
            </div>
        );
    }
}