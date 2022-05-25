import React from 'react';

const Form = (props) => {

    const { change, submit, errors } = props;
    const { firstName, lastName, email, password, tos } = props.values;

    const onChange = (evt) => {
        const { name, type, value, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }


    return (
        <div>
            <h1>Hello World</h1>

            <p>{errors.firstName}</p>
            <p>{errors.lastName}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}> 
                <label>First Name:
                    <input
                        type="text" 
                        name="firstName"
                        value={firstName}
                        onChange={onChange}
                    />
                </label>
                <label>Last Name:
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create a User" />
            </form>
        </div>
    )
}

export default Form;