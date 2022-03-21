import { useEffect, useState } from 'react'
import './index.scss'

function Form(props) {
    const {
        title, 
        handleSubmit, 
        buttonText = 'GỬI',
        defaultForm,
        handleChange,
        hasTextArea = false,
        textAreaIndexs = [],
        errors
    } = props
    const [formData, setFormData] = useState(defaultForm)

    const handleClick = (e) => {
        e.preventDefault()
        handleSubmit && handleSubmit()
    }
    const change = (e, field) => {
        setFormData({...formData, [field]: {...formData[field], value: e.target.value }})
    }

    useEffect(() => {
        const formOutput = {}
        Object.keys(formData).forEach(item => {
            formOutput[item] = formData[item].value
        })
        handleChange && handleChange(formOutput)
    }, [formData])

    return ( 
        <div className="formFormat">
            <span className="formFormat__title">{title}</span>
            <form className="formFormat__form">
                {Object.keys(formData).map((item, index) => {
                    return (
                        hasTextArea && textAreaIndexs.length && textAreaIndexs.includes(index) ?
                        (
                            <div className='formFormat__form__group' key={index}>
                                <textarea 
                                    className={errors[item] && `formFormat__form__group--hasError`}
                                    onChange={(e) => change(e, item)}
                                    value={formData[item].value}
                                    placeholder={formData[item].placeHolder}
                                />
                                <span className='formFormat__form__group__error'>{errors[item] || ''}</span>
                            </div>    
                        )
                        : (
                        <div className='formFormat__form__group' key={index}>
                            <input 
                                type={item === 'password' ? 'password' : undefined}
                                className={errors[item] && `formFormat__form__group--hasError`}
                                onChange={(e) => change(e, item)} 
                                value={formData[item].value}
                                placeholder={formData[item].placeHolder}
                            />
                            <span className='formFormat__form__group__error'>{errors[item] || ''}</span>
                        </div>
                        )
                    )
                })}
                <div className='formFormat__form__sumbitBtn'>
                    <button onClick={(e) => handleClick(e)}>{buttonText}</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
