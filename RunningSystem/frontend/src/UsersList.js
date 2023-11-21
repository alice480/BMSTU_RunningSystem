import  React, { Component } from  'react';
import UsersService from './UsersService';

const  usersService  =  new  UsersService();

class  UsersList  extends  Component {
    constructor(props) {
		super(props);
		this.state  = {
			users: []
		};
	}

    componentDidMount() {
        var self = this;
        usersService.getUsers().then(function (result) {
            self.setState({ users:  result.data})
        });
    }

    render() {
        return (
        <div  className="users--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Father Name</th>
                    <th>Birth date</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.users.map( c  =>
                    <tr  key={c.id}>
                        <td>{c.name}  </td>
                        <td>{c.surname}</td>
                        <td>{c.father_name}</td>
                        <td>{c.birth_date}</td>
                        <td>{c.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        );
    }
}

export default UsersList;