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
        textAreaIndexs = []
    } = props

    const [formData, setFormData] = useState(defaultForm)
    const handleClick = (e) => {
        e.preventDefault()
        handleSubmit && handleSubmit(formData)
    }
    const change = (e, field) => {
        setFormData({...formData, [field]: e.target.value })
    }

    useEffect(() => {
        handleChange && handleChange(formData)
    }, [formData, change])

    return ( 
        <div className="formFormat">
            <span className="formFormat__title">{title}</span>
            <form className="formFormat__form">
                {Object.keys(formData).map((item, index) => {
                    return (
                        hasTextArea && textAreaIndexs.length && textAreaIndexs.includes(index) ?
                        (
                            <div className='formFormat__form__group' key={index}>
                                <textarea onChange={(e) => change(e, item)} value={formData[item]}/>
                            </div>    
                        )
                        : (
                        <div className='formFormat__form__group' key={index}>
                            <input onChange={(e) => change(e, item)} value={formData[item]}/>
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
