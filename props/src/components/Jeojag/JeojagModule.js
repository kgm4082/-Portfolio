import React from 'react';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './MenuTree.css';
import $ from 'jquery';


// 메뉴 목록
function MenuTree() {
    // useEffect(() => {
        $(function () {
            $('.tree li:has(ul)')
                .addClass('parent_li');
            $('.tree li.parent_li > span').on('click', function (e) {
                var children = $(this)
                    .parent('li.parent_li')
                    .find(' > ul > li');
                if (children.is(':visible')) {
                    children.hide('fast');
                } else {
                    children.show('fast');
                }
                e.stopPropagation();
            });
        });
    return (
        <div className='d-flex flex-column align-items-stretch flex-shrink-0 bg-white' style={{width: '380px'}}>
            <div className='tree well'>
                <ul>
                    <li>
                        <span>
                            <i className='fa-solid fa-folder-open'></i> Root
                        </span>
                        <ul>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> OS
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-linux'></i> 리눅스 (OSquery)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-linux'></i> 윈도우 7
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-linux'></i> 유닉스
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-linux'></i> 붉은별
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-linux'></i> 윈도우 10
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-linux'></i> 리눅스 (auditbeat)
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> NETWORK
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> L2스위치
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> 실장비 연동스위치
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> Bridge 연결스위치
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> 라우터
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> TG 라우터
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> 더미인터넷
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-route'></i> 더미서브넷
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> 특수기능서버
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 실장비
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 웹서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 메일서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> DNS서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 망연동서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 메일연동서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 행위발생기
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> DB서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> 프록시서버
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> VPN서버
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> 보안장비
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-table-cells-large'></i> UTM(Snot)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-table-cells-large'></i> UTM(Suricata)
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> 공격장비
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-jet-fighter-up'></i> 위협발생기
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> Victim
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-windows'></i> 윈도우 10 victim
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-windows'></i> 윈도우 7 x64 victim
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-windows'></i> 우분투 14.04
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-windows'></i> 우분투 16.04
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-brands fa-windows'></i> 우분투 18.04
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>
                                    <i className='fa-solid fa-file'></i> BattleLab
                                </span>
                                <ul>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> C2_Server
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> WEB_Server
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> Win10_1909
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> Win10_2004
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fa-solid fa-server'></i> Win10_1909_Nexus
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

// 메뉴
function Menu() {

    return (
        <Card>
            <Card.Header style={{backgroundColor: "grey"}}>MENU</Card.Header>
            <Card.Body style={{textAlign: "center"}}>
                <Button style={{marginBottom: "10px" ,width: "100%"}}>네트워크맵 저장(ALT+S)</Button>
                <Button style={{width: "100%"}}>템플릿 불러오기(ALT+T)</Button>
            </Card.Body>
        </Card>
    )
}

function Remocon() {
    return (
        <Card >
            <Card.Header style={{backgroundColor: "GREY"}}>REMOCON</Card.Header>
            <Card.Body>
                <Card.Text>현재 배율 <br /> 80%</Card.Text>
                <Card.Text>ZOOM</Card.Text>
                <div className='zoom_btn' style={{display: "flex"}}>
                    <Button color='danger'>+</Button>
                    <Button color='primary'>-</Button>
                </div>
                <Button>기본</Button>
            </Card.Body>
        </Card>
    )
}

export { MenuTree, Menu, Remocon };