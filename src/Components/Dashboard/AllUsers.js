import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://safe-falls-27408.herokuapp.com/users').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h5 className='text-lg font-sans font-bold pl-10'>Total Users: {users.length}</h5>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>USER EMAIL</th>
                            <th>User Role</th>
                            <th>User Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id}
                                user={user} index={index} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;