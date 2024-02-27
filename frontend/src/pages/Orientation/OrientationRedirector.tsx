import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrientationRedirector() {
    let navigate = useNavigate();

    useEffect(() => {
        // TODO:
        // Redirect to where the user left off by default, not necessarily the beginning
        navigate('/registration/1', { replace: true });
    }, [navigate]);

    return null; // Component does not render anything
}

export default OrientationRedirector;
