import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MultiStepForm from '../components/MultiStepForm/UserForm';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';

function preScreenRequest ({ menuItems }) {

    const router = useRouter();

    const [isLogged, setIsLogged] = useState();

    const fetchData = () => {
        let token = localStorage.getItem('jwt');

        if(token) {
            setIsLogged(token);
        } else {
            router.push('/')
        }
    }

    useEffect(() => {
        
        fetchData();

    }, [isLogged]);


    return (
        <div className="relative w-full">
        <Navbar />
            <div className="md:flex static">
                <SideBar props={menuItems}/>
                    <div className="xl:mx-32 lg:mx-24 md:mx-auto md:pt-32">
                        <MultiStepForm />
                    </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.BASE_URL}/broker-portal-menu-items`)
    const data = await response.json()
    return {
        props: { menuItems: data },
    };
}

export default preScreenRequest;