import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from "antd"
import Link from "next/link"
import styled from "styled-components"

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FromWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onChangeId = useCallback(
        (e) => {
            setId(e.target.value)
        },
        [],
    )

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    },
        [],
    )

    const onSubmit = useCallback(() => {
        setIsLoggedIn(true)
        console.log(id, password)
    }, [id, password]
    )

    return (
        <FromWrapper onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">PW</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>LOGIN</Button>
                <Link href="/signup"><a><Button>SIGNUP</Button></a></Link>
            </ButtonWrapper>
        </FromWrapper>
    )
}

LoginForm.propTypes = {

}

export default LoginForm
