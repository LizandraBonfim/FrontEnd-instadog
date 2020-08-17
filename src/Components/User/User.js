import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UpdateUser from './UpdateUser';
import { UserContext } from '../../UserStorage';
import NotFound from '../NotFound';


function User() {

    const { data } = React.useContext(UserContext);

    if (!data.token) return <Navigate to="/" />

    return (
        <section className="container ">
            {/* <Head title="My profile" description="My profile" /> */}

            <UserHeader />
            <Routes >
                <Route path="/" element={<Feed user={data.user.id} />} />
                <Route path="/new-post" element={<UserPhotoPost />} />
                <Route path="/atualizar" element={<UpdateUser data={data.user} />} />
                <Route path="/graph" element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )


}

export default User
