import React, {useState} from "react";
import {Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom";
// page
import Home from "../home";
import About from "../about";
import Test from "../test/test";
import Care from "../care/care";
import Command from "../command";
// style
import './admin.scss'

const Admin = ()=>{
    const navigate = useNavigate()

    const [nav] = useState(['/', 'about', 'test', 'care', 'command'])
    const [navName] = useState(['首页', '关于', '测试', '照顾', '推荐'])
    const [curPage, setCurPage] = useState(useLocation().pathname)

    const redirect = (to)=>{
        navigate(to)
        setCurPage(to)
    }

    return (
        <>
            <div id={'top-nav'}>
                <div className={'logo'} />
                <div className={'nav-group'}>
                    {
                        nav.map((v, i)=>{
                            return (
                                <div key={v}
                                     id={`nav-${v}`}
                                     className={`nav-button ${curPage===v?'text-Pink':''}`}
                                     onClick={()=>redirect(v)}>
                                    {navName[i]}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={'search'}>
                    <input type="text" placeholder={'select'}/>
                    <div className={'iconfont icon-search search-img'} />
                </div>
            </div>
            <>
                <Routes>
                    <Route path={'about'} element={<About />} />
                    <Route path={'test'} element={<Test />} />
                    <Route path={'care'} element={<Care />} />
                    <Route path={'command'} element={<Command />} />
                    {/* 重定向 */}
                    <Route path={''} element={<Home />} />
                    <Route path={'*'} element={<Navigate to={'/'} />} />
                </Routes>
            </>
        </>
    )
}

export default Admin