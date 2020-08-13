import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserStorage';
// import useFeed from '../../hooks/useFeed';

function User() {

    const { data } = React.useContext(UserContext);

    // const {data} = useFeed({rota: 'feed', user: data.user.id});
    //console.log('data user', data);

    return (
        <section className="container ">
            {/* <Head title="My profile" description="My profile" /> */}

            <UserHeader />
            <Routes >
                <Route path="/" element={<Feed user={data.user.id} />} />
                <Route path="/new-post" element={<UserPhotoPost />} />
                <Route path="/graph" element={<UserStats />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </section>
    )
}

export default User
