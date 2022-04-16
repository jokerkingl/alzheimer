import React, {useState} from "react";
// style
import './login.scss'

const Login = ()=>{
    // const registerInput = ['email', 'username', 'password', 'password-repeat', 'code']
    const [loginOrRegister, setLoginOrRegister] = useState(true)

    return (
        <div id={'login'}>
            <div className={'header'}>
                <div className={'logo'} />
            </div>
            <div className={'bg'} />
            <div id={'login-register'}>
                <h4>邮箱账号登录</h4>
               <div className={'input-box'} >
                    <div className={'iconfont icon-email'} />
                    <input type={'email'} className={'input'} placeholder={'邮箱账号'}/>
                </div>
                {!loginOrRegister?(
                    <div className={'input-box'} >
                        <div className={'iconfont icon-user'} />
                        <input className={'input'} placeholder={'用户名'}/>
                    </div>
                ):''}
                <div className={'input-box'} >
                    <div className={'iconfont icon-password'} />
                    <input type={'password'} className={'input'} placeholder={'输入密码'}/>
                </div>
                {!loginOrRegister?(
                    <div className={'input-box'} >
                        <div className={'iconfont icon-password'} />
                        <input type={'password'} className={'input'} placeholder={'重复密码'}/>
                    </div>
                ):''}
                {!loginOrRegister?(
                    <div className={'input-box'} >
                        <div className={'iconfont icon-code'} />
                        <input className={'input'} placeholder={'输入验证码'}/>
                    </div>
                ):''}
                <div className={'button bg-Cyan'}>{loginOrRegister?'登录':'注册'}</div>
                <div className={'change text-Blue'}
                    onClick={()=>{setLoginOrRegister(!loginOrRegister)}}>
                    {loginOrRegister?'注册账号':'已有账号'}</div>
            </div>
        </div>
    )
}

export default Login