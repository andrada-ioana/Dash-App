import React, {useState} from 'react';
import RegisterComponent from '../../components/Signup';

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setErrors] = useState({});

  ///console.log('form :>> ', form);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters!'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required!'};
      });
    }
  };

  const onSubmit = () => {
    //validations
    //console.log('form :>> ', form);

    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please add a username!'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add your first name!'};
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add your last name!'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add your email!'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password!'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(error).every(item => !item)
    ) {
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={error}
    />
  );
};

export default Register;
