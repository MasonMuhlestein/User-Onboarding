import React from 'react'

export default function NewUser(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
      }

    const onChange = e => {
        const {value, name, checked, type} = e.target
        change(name , value)
      }

    return (
        <form className='form container' onSubmit={onSubmit}>

            <div className='form-newUser submit'>
                <button disabled={disabled}>Button</button>

                <div className='errors'>
                  <div>{errors.name}</div>
                  <div>{errors.email}</div>
                  <div>{errors.password}</div>
                </div>
            </div>

            <div className='new-user inputs'>
                <h3>Information</h3>

                <label>Name
                    <input
                      value={values.name}
                      onChange={onChange}  
                      name='name'
                      type='text'
                    />
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>

                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>
            </div>

            <div className='new-user checkboxes'>
                <h3>Terms of Service</h3>
                <label>Terms
                    <input type="checkbox" name="terms" onChange={onChange} checked={values.terms}/>
                </label>
            </div>


        </form>
    )

}
