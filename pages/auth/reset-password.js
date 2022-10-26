import Navbar from '../../components/NavBar';
import ResetPassword from '../../components/ResetPassword';

const ResetPasswordPage = () => {


    return (
        <>
            <Navbar />
            <div className="xl:mx-32 lg:mx-24 md:mx-auto md:pt-32">
                <p className="text-center">Please reset your password</p>
                <ResetPassword />
            </div>
        </>
    )
}

export default ResetPasswordPage;