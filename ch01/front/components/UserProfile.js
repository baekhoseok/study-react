import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Avatar } from "antd"

const UserProfile = ({ setIsLoggedIn }) => {

    const onLogout = useCallback(
        () => {
            setIsLoggedIn(false)
        },
        [],
    )
    return (
        <Card
            actions={[
                <div key="twitt">짹짹<br />0</div>,
                <div key="followings">following<br />0</div>,
                <div key="followers">follwer<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="Hoseok"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

UserProfile.propTypes = {

}

export default UserProfile
