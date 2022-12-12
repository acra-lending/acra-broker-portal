import { useState } from 'react';
import axiosWithBaseURL from '../lib/nextstrapi-axios'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import {Oval} from "react-loader-spinner";

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
                
                setTimeout(() => { push('https://acralending.com/portal-redirect') }, 5000);
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
                            className="text-[#0033A1] hover:text-white border border-[#0033A1] hover:bg-[#0033A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-64"
                            >
                            {!isSubmitting && "Reset password"}
                            {isSubmitting && 
                                <div style={{position: "relative", left: "40%"}}>
                                    <Oval
                                        height={30}
                                        width={30}
                                        color="#0033a1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#8ab7e9"
                                        strokeWidth={10}
                                        strokeWidthSecondary={10}
                                    />
                                </div>
                            }
                        </button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
        
        </>
    )
}

export default ResetPassword;