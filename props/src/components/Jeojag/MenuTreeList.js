

var MenuTreeList = [
    {
        id : "1",
        name : "Root",
        path : "folder",
        children : [
            {
                id : "1-1",
                name : "OS",
                path : "file",
                children : [
                    {
                        id : "1-1-1",
                        name : "리눅스 (OSquery)",
                        path : "linux"
                    },
                    {
                        id : "1-1-2",
                        name : "윈도우 7",
                        path : "linux"
                    },
                    {
                        id : "1-1-3",
                        name : "유닉스",
                        path : "linux"
                    },
                    {
                        id : "1-1-4",
                        name : "붉은별",
                        path : "linux"
                    },
                    {
                        id : "1-1-5",
                        name : "윈도우 10",
                        path : "linux"
                    },
                    {
                        id : "1-1-6",
                        name : "리눅스 (auditbeat)",
                        path : "linux"
                    }
                ]
            },
            {
                id : "1-2",
                name : "NETWORK",
                path : "file",
                children : [
                    {
                        id : "1-2-1",
                        name : "L2스위치",
                        path : "route"
                    },
                    {
                        id : "1-2-2",
                        name : "실장비 연동스위치",
                        path : "route"
                    },
                    {
                        id : "1-2-3",
                        name : "Bridge 연결스위치",
                        path : "route"
                    },
                    {
                        id : "1-2-4",
                        name : "라우터",
                        path : "route"
                    },
                    {
                        id : "1-2-5",
                        name : "TG 라우터",
                        path : "route"
                    },
                    {
                        id : "1-2-6",
                        name : "더미인터넷",
                        path : "route"
                    },
                    {
                        id : "1-2-7",
                        name : "더미서브넷",
                        path : "route"
                    },
                ]
            },
            {
                id : "1-3",
                name : "특수기능서버",
                path : "file",
                children : [
                    {
                        id : "1-3-1",
                        name : "실장비",
                        path : "server"
                    },
                    {
                        id : "1-3-2",
                        name : "웹서버",
                        path : "server"
                    },
                    {
                        id : "1-3-3",
                        name : "메일서버",
                        path : "server"
                    },
                    {
                        id : "1-3-4",
                        name : "DNS서버",
                        path : "server"
                    },
                    {
                        id : "1-3-5",
                        name : "망연동서버",
                        path : "server"
                    },
                    {
                        id : "1-3-6",
                        name : "메일연동서버",
                        path : "server"
                    },
                    {
                        id : "1-3-7",
                        name : "행위발생기",
                        path : "server"
                    },
                    {
                        id : "1-3-8",
                        name : "DB서버",
                        path : "server"
                    },
                    {
                        id : "1-3-9",
                        name : "프록시서버",
                        path : "server"
                    },
                    {
                        id : "1-3-10",
                        name : "VPN서버",
                        path : "server"
                    }
                ]
            },
            {
                id : "1-4",
                name : "보안장비",
                path : "file",
                children : [
                    {
                        id : "1-4-1",
                        name : "UTM(Snot)",
                        path : "UTM"
                    },
                    {
                        id : "1-4-2",
                        name : "UTM(Suricata)",
                        path : "UTM"
                    }
                ]
            },
            {
                id : "1-5",
                name : "공격장비",
                path : "file",
                children : [
                    {
                        id : "1-5-1",
                        name : "위협발생기",
                        path : "plane"
                    }
                ]
            },
            {
                id : "1-6",
                name : "Victim",
                path : "file",
                children : [
                    {
                        id : "1-6-1",
                        name : "윈도우 10 victim",
                        path : "window"
                    },
                    {
                        id : "1-6-2",
                        name : "윈도우 7 x64 victim",
                        path : "window"
                    },
                    {
                        id : "1-6-3",
                        name : "우분투 14.04",
                        path : "window"
                    },
                    {
                        id : "1-6-4",
                        name : "우분투 16.04",
                        path : "window"
                    },
                    {
                        id : "1-6-5",
                        name : "우분투 18.04",
                        path : "window"
                    }
                ]
            },
            {
                id : "1-7",
                name : "BattleLab",
                path : "file",
                children : [
                    {
                        id : "1-7-1",
                        name : "C2_Server",
                        path : "server"
                    },
                    {
                        id : "1-7-2",
                        name : "Web_Server",
                        path : "server"
                    },
                    {
                        id : "1-7-3",
                        name : "Win10_1909",
                        path : "server"
                    },
                    {
                        id : "1-7-4",
                        name : "Win10_2004",
                        path : "server"
                    },
                    {
                        id : "1-7-5",
                        name : "Win10_1909_nexus",
                        path : "server"
                    },
                ]
            }
        ]
    }
]

export default MenuTreeList;