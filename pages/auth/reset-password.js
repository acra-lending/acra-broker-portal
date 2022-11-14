import Navbar from '../../components/NavBar';
import ResetPassword from '../../components/ResetPassword';

const ResetPasswordPage = () => {


    return (
        <>
            <Navbar />
            <div className="xl:mx-32 lg:mx-24 md:mx-auto md:pt-32">
                <h4 className="text-center">Set Password</h4>
                <ResetPassword />
            </div>
        </>
    )
}

export default ResetPasswordPage;