import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from "next/link"
import { Menu, Input, Row, Col } from "antd"
import styled from "styled-components"

import LoginForm from "./LoginForm"
import UserProfile from "./UserProfile"

const SearchInput = styled(Input.Search)`
    vertical-align: middle ;
`

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>Twitter</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/"><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12} >
                    {children}

                </Col>
                <Col xs={24} md={6} >
                    <a href="http://www.naver.com" target="_blanck" rel="noreferrer noopener" >Made by Hoseok</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout
