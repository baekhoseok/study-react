import React from 'react'
import Head from "next/head"

import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'


const Profile = () => {


    const followerList = [{ nickname: 'hoseok1' }, { nickname: 'hoseok2' }, { nickname: 'hoseok3' }]
    const followingList = [{ nickname: 'pual1' }, { nickname: 'paul2' }, { nickname: 'paul3' }]
    return (
        <>
            <Head>
                <title>Twitter Profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="following" data={followingList} />
                <FollowList header="follower" data={followerList} />
            </AppLayout>
        </>
    )
}

export default Profile
