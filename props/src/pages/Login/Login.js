import React from 'react';
import { Form, Button, Container } from 'react-bootstrap/';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import isrc from '../ImgSrc'; // 이미지 경로
import loginCSS from './Login.module.css'; // 로그인 CSS

const Login = () => {
    useEffect(() => {
        // 패스워드 잠금 기능
        const toggle_password = document.querySelector('.toggle-password');
        const password = document.querySelector('.pwd');
        toggle_password.addEventListener('click', function () {
            if (toggle_password.classList.contains('fa-eye-slash')) {
                toggle_password.classList.remove('fa-eye-slash');
                toggle_password.classList.add('fa-eye');

                password.setAttribute('type', 'password');
            } else {
                toggle_password.classList.add('fa-eye-slash');
                toggle_password.classList.remove('fa-eye');

                password.setAttribute('type', 'text');
            }
        });
    }, []);

    return (
        <div id='wrap' className={loginCSS.bg}>
            <div className={loginCSS.wrap}>
                <Container>
                    <div className='row justify-content-center'>
                        <div className={loginCSS.header}>
                            <p>몰입형 사이버 모의훈련을 위한 AI 기반 온라인</p>
                            <p>사이버 레인지 학습 플랫폼 기술 개발</p>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className={loginCSS.loginWrap}>
                            <Form className={loginCSS.form}>
                                <Form.Group className={loginCSS.formGroup} controlId='id'>
                                    <Form.Control type='text' className={loginCSS.formControl} placeholder='User ID' color='text-dark' />
                                </Form.Group>
                                <Form.Group className={loginCSS.formGroup} controlId='pw'>
                                    <Form.Control type='password' className={`${loginCSS.formControl} pwd`} placeholder='Password' maxLength='25' />
                                    <span toggle='#password-field' className={`fa-solid toggle-password fa-eye ${loginCSS.fieldIcon}`} />
                                </Form.Group>
                                <Form.Group className={loginCSS.formGroup}>
                                    <div className='w-50'>
                                        <Form.Label className={`${loginCSS.checkboxWrap} checkbox-primary`}>
                                            ID 저장
                                            <Form.Control type='checkbox' />
                                            <span className={loginCSS.checkmark} />
                                        </Form.Label>
                                    </div>
                                </Form.Group>
                                <Form.Group className={loginCSS.formGroup}>
                                    <Form.Control type='submit' value='LOGIN' className={loginCSS.formControl} />
                                </Form.Group>
                                <div className={loginCSS.logo}>
                                    <img src={isrc.logo} />
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Login;
