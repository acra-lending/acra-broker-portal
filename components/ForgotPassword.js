import { useState } from 'react';
import axiosWithBaseURL from '../lib/nextstrapi-axios';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ForgotPassword = () => {
    const [alert,setAlert] = useState();

    const initialValues = {
        email: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Insert a valid email").required("*Required")
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setAlert();

        axiosWithBaseURL.post('/api/auth/forgot-password', values)
            .then(response => {
                const message = `A password reset link has been sent to your email address. Don't forget to also check your spam inbox.`;
                setAlert(['success', message]);

                resetForm();
            })
            .catch(error => {
                if ( !error.response.data.error.message ) {
                    setAlert(['alert', "Something went wrong"])
                } else {
                    const messages = error.response.data.error.message;

                    setAlert(['alert', messages.charAt(0).toUpperCase() + messages.slice(1)]);
                }
            })
            .finally(() => {
                setSubmitting(false);
            });
    }

    return (
        <>

        <div className="flex flex-col pt-10 justify-center items-center">

            {alert && (
                <div 
                    className={
                        alert[0] === 'success' ? 'w-2/3 bg-blue-400 rounded p-2 my-4' : 'w-2/3 bg-red-400 rounded py-1'   
                    }>
                    <div 
                        dangerouslySetInnerHTML={{ __html: alert[1] }}
                        className="text-center text-white"
                    />
                </div>
            )}
            <div className='p-8 max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => onSubmit(values, { setSubmitting, resetForm })} >
                { ({ isSubmitting, isValid }) => (
                    <Form>
                        <div>
                            <div><label htmlFor="email">Email</label></div>
                            <Field type="email" id="email" name="email" placeholder="" className="rounded w-64" />
                            <div className="error text-red-500"><ErrorMessage name="email" /></div>
                        </div>

                        <br />

                        <button 
                            type="submit"
                            disabled={!isValid}
                            className="text-[#0033A1] hover:text-white border border-[#0033A1] hover:bg-[#0033A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-64" 
                            >
                            {!isSubmitting && "Send link"}
                            {isSubmitting && "Loading..."}
                        </button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>

        </>
    )
}

export default ForgotPassword;