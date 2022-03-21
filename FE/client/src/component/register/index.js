import './index.scss'
import BreadCrumb from '../products/breadCrumb/breadcrumb';
import Form from '../FormFormat';
import { useState } from 'react';

function Register() {
    const [formRegister, setFormRegister] = useState({lastName: '', firstName: '', phoneNumber: '', mail: '', password: ''})
    const formRender = {
        lastName: {
            value: formRegister.lastName,
            placeHolder: 'Họ'
        },
        firstName: {
            value: formRegister.firstName,
            placeHolder: 'Tên'
        },
        phoneNumber: {
            value: formRegister.phoneNumber,
            placeHolder: 'Số điện thoại'
        },
        mail: {
            value: formRegister.mail,
            placeHolder: 'Email'
        },
        password: {
            value: formRegister.password,
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
            mail: !form.mail ? 'Vui lòng nhập email' : (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.mail)) ? '' : 'Email nhập chưa đúng',
            password: !form.password ? 'Vui lòng nhập password' : form.password.length < 6 ? 'Mật khẩu phải lớn hơn 6 ký tự' : '',
            lastName: !form.lastName ? 'Vui lòng nhập họ của bạn' : '',
            firstName: !form.firstName ? 'Vui lòng nhập tên của bạn' : '',
            phoneNumber: !form.firstName ? 'Vui lòng nhập số điện thoại' : /((09|03|07|08|05)+([0-9]{8})\b)/g.test(form.phoneNumber) ? '' : 'Số điện thoại không đúng'
        }
        const status = Object.keys(errors).some(item => !!errors[item] === true )
        return {
            status,
            errors
        }
    }

    const handleSubmit = () => {
        if (!hasError(formRegister).status) {
            console.log('đăng ký với sever', formRegister)
        } else {
            setFormError(hasError(formRegister).errors)
        }
    }

    return ( 
        <>
            <BreadCrumb items={[{text: "Trang chủ", path:'/'}]} last='Đăng ký'/>
            <div className='register'>
                <div className='register__content grid wide'>
                    <div className='register__content__header'>
                        ĐĂNG KÝ TÀI KHOẢN
                    </div>
                    <div className='register__content__form'>
                        <Form 
                            title='Nếu chưa có tài khoản vui lòng đăng ký tại đây:'
                            defaultForm={formRender}
                            handleChange={(form) => handleChage(form)}
                            buttonText='ĐĂNG KÝ'
                            handleSubmit={handleSubmit}
                            errors={formError}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
