import Navbar from '../../components/NavBar';
import ResetPassword from '../../components/ResetPassword';

const ResetPasswordPage = () => {


    return (
        <>
            <Navbar />
            <div className="h-screen bg-gradient-to-b from-blue-500 to-blue-800 xl:pt-32 lg:pt-32 md:px-auto md:pt-32 sm:pt-10">
                <h4 className="text-white text-center">Set Password</h4>
                <ResetPassword />
            </div>
        </>
    )
}

export default ResetPasswordPage;