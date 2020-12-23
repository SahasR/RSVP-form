import {useState, useEffect} from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        sliiteven: '',
        studid: '',
        stud: '',
        studemail: '',
        studcontact: ''
    });
    const [errors, setErrors] = useState({})

    const Change = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    }

    return {Change, values, handleSubmit, errors}
};

export default useForm;