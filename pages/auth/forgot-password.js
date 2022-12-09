import Navbar from '../../components/NavBar';
import ForgotPassword from '../../components/ForgotPassword';

const ForgotPasswordPage = () => {
    

    return (
        <>
            <Navbar />
            <div className="h-screen bg-gradient-to-b from-blue-500 to-blue-800 xl:pt-32 lg:pt-32 md:px-auto md:pt-32 sm:pt-10">
                <h4 className="text-white text-center">Please enter your registered email address and we will send you a link to reset your password</h4>
                <ForgotPassword />
            </div>
        </>
    )
}

export default ForgotPasswordPage;