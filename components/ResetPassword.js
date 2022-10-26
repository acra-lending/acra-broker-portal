import { useState } from 'react';
import axiosWithBaseURL from '../lib/nextstrapi-axios'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';

const ResetPassword = () => {
    const { push, query } = useRouter();
    const [alert,setAlert] = useState();

    const initialValues = {
        password: "",
        passwordConfirmation: "",
    }

    const validationSchema = Yup.object({
        password: Yup.string().required("*Required"),
        passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("*Required"),
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setAlert();

        values.code = query.code;

        axiosWithBaseURL.post('/api/auth/reset-password', values)
            .then(response => {
                const message = `Your password has been reset. In a few seconds, you'll be redirected to the login page.`;
                setAlert(['success', message]);

                resetForm();
                
                setTimeout(() => { push('/') }, 5000);
            })
            .catch(error => {
                console.log(error);

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

        <div className="flex flex-col pt-24 justify-center items-center">

            {alert && (
                <div 
                className={
                    alert[0] === 'success' ? 'w-2/3 bg-blue-400 rounded p-2' : 'w-2/3 bg-red-400 rounded py-1'   
                }>
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
                onSubmit={(values, { setSubmitting, resetForm }) => onSubmit(values, { setSubmitting, resetForm })} >
                { ({ isSubmitting, isValid }) => (
                    <Form>
                        <div>
                            <div><label htmlFor="password">Password</label></div>
                            <Field type="password" id="password" name="password" placeholder="" className="rounded w-64" />
                            <div className="error text-red-500"><ErrorMessage name="password" /></div>
                        </div>

                        <br />

                        <div>
                            <div><label htmlFor="passwordConfirmation">Repeat Password</label></div>
                            <Field type="password" id="passwordConfirmation" name="passwordConfirmation" placeholder="" className="rounded w-64" />
                            <div className="error text-red-500"><ErrorMessage name="passwordConfirmation" /></div>
                        </div>

                        <br />

                        <button 
                            type="submit"
                            disabled={!isValid}
                            className="bg-transparent hover:bg-[#0033A1] text-[#0033A1] font-semibold hover:text-white py-2 px-4 border border-[#0033A1] hover:border-transparent rounded w-64"
                            >
                            {!isSubmitting && "Reset password"}
                            {isSubmitting && "Loading..."}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
        
        </>
    )
}

export default ResetPassword;