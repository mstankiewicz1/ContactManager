import React from 'react';


const allUsers = ['Marek', 'Agnieszka', 'Julia', 'Ola', 'Marcin'];

export default class FilterUsers extends React.Component {
    constructor() {
        super();

        this.state = {
            filteredUsers: allUsers
        }
    }

    filterUsers(e) {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text);
        this.setState({
            filteredUsers
        });
    }

    getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
    }

    render() {
        return (
            <div>
                <input onInput={this.filterUsers.bind(this)}/>
                <UsersList users={this.state.filteredUsers}/>
            </div>
        )
    };
}

const UsersList = ({ users }) => {
    if(users.length>0){
        return (
            <ul>
                {users.map(user=> <li key={user}>{user}</li>)}
            </ul>

        )
    }
    return (
        <p>No result!</p>
    )
};

