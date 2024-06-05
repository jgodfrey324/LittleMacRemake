import '../App.css';
import { useNavigate } from 'react-router-dom'

function EnterWeight() {
  const navigate = useNavigate();
  return (
    <div className="start-screen d-flex flex-column align-items-center justify-content-center">
        <p className="mb-4">
            Please enter your Earth weight...
        </p>
        <form className='d-flex flex-column'>
          <input type='text' />
          <input className='mt-3 btn btn-secondary' onClick={() => navigate('/choose-planet')} type='submit' value='Continue...' />
        </form>
    </div>
  );
}

export default EnterWeight;
