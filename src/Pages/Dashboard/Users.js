import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import UserRow from './UserRow';

const Users = () => {
    const [deleteUser, setDeleteUser] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h1>Manage Admin List</h1>
            <div>
                <h2 className='text-2xl'>All Users:{users.length}</h2>
                <div className="overflow-x-auto ">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UserRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteUser={setDeleteUser}
                                ></UserRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {deleteUser && <DeleteConfirmModal setDeleteUser={setDeleteUser} deleteUser={deleteUser} refetch={refetch} />}
            </div>
        </div>
    );
};

export default Users;