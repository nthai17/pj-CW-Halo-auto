import './index.scss'
import Select from 'react-select'

function Header({onChange, text}) {
    const options = [
        {value: 'name-asc', label: 'Tên từ A-Z'},
        {value: 'name-desc', label: 'Tên từ Z-A'}
    ]

    const handleChange = (option) => {
        onChange && onChange(option.value)
    }

    return ( 
        <div className='admin__header'>
            <div className='admin__header__text'>
                {text}
            </div>
            <div className='admin__header__select'>
                <Select
                    onChange={option => handleChange(option)}
                    options={options}
                    placeholder='Sắp xếp theo'
                />
            </div>
        </div>
    );
}

export default Header
