import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import axiosWithBaseURL from '../lib/nextstrapi-axios';


const Login = () => {
    const { push } = useRouter();
    const [alert, setAlert] = useState();

    const initialValues = {
        identifier: '',
        password: '',
    }

    const validationSchema = Yup.object({
        identifier: Yup.string().required('*Required'),
        password: Yup.string().required('*Required')
    })

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setAlert();

        axiosWithBaseURL.post('/api/auth/local', values)
            .then(response => {
                console.log(response.data);
                const jwt = response.data.jwt;
                const firstName = response.data.user.firstName;

                localStorage.setItem('jwt', jwt);
                localStorage.setItem('firstName', firstName);

                // push('/');
                window.location.replace('/');
                resetForm();
            })
            .catch(error => {
                console.log(error);
                if(!error.response.data.error.message) {
                    setAlert(['alert', 'Email or Password incorrect'])
                } else {
                    const messages = error.response.data.error.message;

                    setAlert(['alert', messages.charAt(0).toUpperCase() + messages.slice(1)]);
                }
            })
            .finally(() => {
                setSubmitting(false);
            })
    }



    return (
        <>

        <div className="flex flex-col pt-24 justify-center items-center">

            {alert && (
              
                <div 
                    className='bg-red-300 rounded p-2'
                >
                <div 
                    dangerouslySetInnerHTML={{ __html: alert[1] }}
                    className="text-center"
                />
            </div>
            )}

            <br />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {  setSubmitting, resetForm }) => onSubmit(values, { setSubmitting, resetForm })}
            >
            { ({ isSubmitting, isValid }) => (
                <Form>
                    <div>
                        <div><label htmlFor='identifier'>Username or Email</label></div>
                        <Field type='text' id='identifier' name='identifier' placeholder='' className="rounded w-64" />
                        <div className='error text-red-500'><ErrorMessage name='identifier' /></div>
                    </div>
                    <br />
                    <div>
                        <div><label htmlFor='password'>Password</label></div>
                        <Field type='password' id='password' name='password' placeholder='' className="rounded w-64" />
                        <div className='error text-red-500'><ErrorMessage name='password' /></div>
                        <div className="mt-3">
                            <small>
                                <Link href='/auth/forgot-password'>
                                    <a>Forgot password?</a>
                                </Link>
                            </small>
                        </div>
                    </div>
                    <br />
                    <button 
                        type='submit'
                        disabled={!isValid}
                        className="bg-transparent hover:bg-[#0033A1] text-[#0033A1] font-semibold hover:text-white py-2 px-4 border border-[#0033A1] hover:border-transparent rounded w-64"
                    >
                        {!isSubmitting && 'Login'}
                        {isSubmitting && 'Loading'}
                    </button>

                </Form>
            )}
            </Formik>
        </div>
            
        </>

    )
}

export default Login;