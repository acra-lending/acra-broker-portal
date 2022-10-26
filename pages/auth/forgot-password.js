import Navbar from '../../components/NavBar';
import ForgotPassword from '../../components/ForgotPassword';

const ForgotPasswordPage = () => {
    

    return (
        <>
            <Navbar />
            <div className="xl:mx-32 lg:mx-24 md:mx-auto md:pt-32">
                <p className="text-center">Please enter your registered email address and we will send you a link to reset your password</p>
                <ForgotPassword />
            </div>
        </>
    )
}

export default ForgotPasswordPage;