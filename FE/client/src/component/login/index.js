import './index.scss'
import BreadCrumb from '../products/breadCrumb/breadcrumb';
import Form from '../FormFormat';
import { useState } from 'react';

function Login() {
    const [formLogin, setFormRegister] = useState({userName: '', password: ''})
    const formRender = {
        userName: {
            value: formLogin.userName,
            placeHolder: 'Email'
        },
        password: {
            value: formLogin.password,
            placeHolder: 'Mật khẩu'
        },
    }
    const [formError, setFormError] = useState({
        status: false,
        errors: {}
    })

    const handleChage = (form) => {
        setFormError({})
        setFormRegister(form)
    }

    const hasError = (form) => {
        const errors = {
            userName: !form.userName ? 'Vui lòng nhập tên đăng nhập' : '',
            password: !form.password ? 'Vui lòng nhập password' : form.password.length < 6 ? 'Mật khẩu phải lớn hơn 6 ký tự' : ''
        }
        const status = Object.keys(errors).some(item => !!errors[item] === true )
        return {
            status,
            errors
        }
    }

    const handleSubmit = () => {
        if (!hasError(formLogin).status) {
        } else {
            setFormError(hasError(formLogin).errors)
        }
    }
    return ( 
        <>
            <BreadCrumb items={[{text: "Trang chủ", path:'/'}]} last='Đăng nhập'/>
            <div className="login">
                <div className="grid wide login__content">
                    <div className="login__content__header">
                        ĐĂNG NHẬP
                    </div>
                    <div className="login__content__form">
                        <Form 
                            title='Nếu có tài khoản vui lòng đăng nhập tại đây:'
                            defaultForm={formRender}
                            handleChange={(form) => handleChage(form)}
                            buttonText='ĐĂNG NHẬP'
                            handleSubmit={handleSubmit}
                            errors={formError}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
