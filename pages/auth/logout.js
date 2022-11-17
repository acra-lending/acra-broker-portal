import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
    const { push } = useRouter();

    useEffect(() => {

        localStorage.removeItem('jwt');
        localStorage.removeItem('firstname');
        push('/');

    }, [push])
    
    return <></>
}

export default Logout;