import logo from './logo.svg';
import './App.css';
import AppContainer from './components/common/AppContainer';
import {toast,ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
function App() {
toast.configure();
  return (
    <div className="App">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
      <AppContainer/>
    </div>
  );
}

export default App;
