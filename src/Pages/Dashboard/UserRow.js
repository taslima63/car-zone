import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role} </td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default UserRow;