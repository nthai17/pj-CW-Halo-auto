import './index.scss'
import Select from 'react-select'

function Header({onChange, text}) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const handleChange = (option) => {
        console.log(option)
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
