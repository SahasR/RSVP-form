import {useState, useEffect} from 'react';

const useForm = () => {
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
    }

    return {Change, values, handleSubmit}
};

export default useForm;