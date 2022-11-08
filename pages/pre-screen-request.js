import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MultiStepForm from '../components/MultiStepForm/UserForm';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function preScreenRequest ({ menuItems, aeList }) {
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
                    <div className="w-[95%] md:w-2/4 mx-auto pt-24 md:pt-36">
                        <MultiStepForm aeList={aeList}/>
                    </div>
            </div>
        </div>
    )
}


export async function getServerSideProps() {
    const response = await fetch(`${process.env.BASE_URL}/broker-portal-menu-items`)
    const users = await prisma.$queryRaw`SELECT * FROM role_user, s2zar_users WHERE role_user.role_id = 7 AND role_user.user_id = s2zar_users.id ORDER BY s2zar_users.name ASC`
    const data = await response.json()
    const rawAEList = JSON.stringify(users, (key, value) =>  (typeof value === 'bigint' ? value.toString() : value))
    const aeList = JSON.parse(rawAEList)
    return {
        props: { 
            menuItems: data, aeList 
        },
    };
}

export default preScreenRequest;