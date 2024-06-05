// import logo from './logo.svg';
import { useNavigate } from 'react-router-dom'
import '../App.css';


function StartScreen() {
    const navigate = useNavigate();
    return (
        <div className="start-screen d-flex flex-column align-items-center justify-content-center">
            <p className="mb-4">
                Welcome to a Little Mac remake.
            </p>
            <button className='btn btn-secondary mt-4'
            onClick={() => navigate('/enter-weight')}>
                Start your journey
            </button>
        </div>
    );
}

export default StartScreen;
