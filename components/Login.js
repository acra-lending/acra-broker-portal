import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useRouter } from 'next/router'; 
import Link from 'next/link';
import axiosWithBaseURL from '../lib/nextstrapi-axios';


const Login = () => {
    // const { push } = useRouter();
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
                const firstname = response.data.user.firstname;

                localStorage.setItem('jwt', jwt);
                localStorage.setItem('firstname', firstname);

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
            <div className="lg:pt-12 md:pt-24">

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
                <div className='py-8'>
                    <mark className='bg-[#ffff00]'>
                        <strong>
                            IMPORTANT:&nbsp;
                        </strong>
                        <em>
                            Brokers must log in below to upload loan conditions to your assigned Account Manager.
                        </em>
                    </mark>
                </div>

                <div className='p-8 max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, {  setSubmitting, resetForm }) => onSubmit(values, { setSubmitting, resetForm })}
                    >
                    { ({ isSubmitting, isValid }) => (
                            <Form className='flex flex-col items-center'>
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
                                    className="text-[#0033A1] hover:text-white border border-[#0033A1] hover:bg-[#0033A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-64"
                                >
                                    {!isSubmitting && 'Login'}
                                    {isSubmitting && 'Loading'}
                                </button>

                            </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </>

    )
}

export default Login;