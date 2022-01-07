import React  from 'react'
import {Form,Button,Container,Alert} from 'react-bootstrap';
import { Formik,ErrorMessage } from 'formik';
import useUser  from '../../hooks/useUser';
import './Form.css'
const Forms = () => {
    const {login,loadinLogin,loginError,isLogged} = useUser();

    return (
        <Container>
            <Formik
                initialValues={{
                    email: 'challenge@alkemy.org',
                    password: 'react'
                }}
                //Validate form
                validate={(val) => {
                    let errors = {};
                    if(!val.password){
                        errors.password = 'Password is required';
                    }else if(val.password.length < 5){
                        errors.password = 'Password must be at least 5 characters';
                    }else if(val.password.length > 16){
                        errors.password = 'Password must be less than 16 characters';
                    }
                    if(!val.email){
                        errors.email = 'Email is required';
                    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val.email)){
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                //Submit form
                onSubmit={(values,{resetForm}) => {
                    login(values);
                }} 
            >
                
                {({values,errors , handleSubmit ,handleChange ,handleBlur })=>(
                    <Form className='form-container ' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-label'>Email address</Form.Label>
                            <Form.Control 
                                className='form-input w-100'
                                name="email" 
                                type="email" 
                                placeholder="Enter email" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="email" component={()=>(<Alert className='mt-4' variant='danger'>{errors.email}</Alert>)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-label' >Password</Form.Label>
                            <Form.Control 
                                className='form-input w-100'
                                name="password" 
                                type="password" 
                                placeholder="Password" 
                                value={values.password} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="password" component={()=>(<Alert className='mt-4' variant='danger'>{errors.password}</Alert>)}  />
                        </Form.Group>
                            { isLogged && <Alert className='mt-4 w-auto alert' variant="success">Login Success</Alert>}
                            {loadinLogin && <Alert className='mt-4 ' variant="warning">Cheking Credentials...</Alert>}
                            { loginError && <Alert className='mt-4 w-auto' variant="danger">Login Fail</Alert>}
                   
                           
                        <Button variant="primary" className='btn-form-submit' type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default Forms
