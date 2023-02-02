import React, {useCallback, useState} from "react";

const useFormValidation = () => {
    const [values, setValues] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [dirties, setDirties] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
        setDirties({...dirties, [name]: true});
    }

    const resetForm = useCallback(() => {
        setErrors({});
        setValues({});
        setIsValid(false);
        setDirties({})
    }, [setValues, setIsValid, setErrors, setDirties]);

    return {
        values,
        dirties,
        setDirties,
        errors,
        isValid,
        setValues,
        setIsValid,
        handleChange,
        resetForm,
        setErrors,
    };
};

export default useFormValidation;