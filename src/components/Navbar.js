import logo from '../img/logo-airbnb.png';
import 'bootstrap/dist/css/bootstrap.css';
function Navbar(){
    return(
        
        <div id="container-navbar" className="row justify-content-around">
            {/* logo */}
            <div id="container-logo-navbar" className='col-sm-12 col-md-12 col-lg-4 h-100 d-flex align-items-center justify-content-center'>
                <img className="img-fluid h-50" src={logo} alt="Logo AirBnB" />
            </div>
            {/* options section */}
            <div id="container-main-navbar" className='col-sm-12 col-md-12 col-lg-4 h-100 d-flex align-items-center justify-content-center'>
                <div>

                </div>
            </div>
            {/* settings */}
            <div id="container-settings-navbar" className='col-sm-12 col-md-12 col-lg-4 h-100 d-flex align-items-center justify-content-center'>

            </div>

        </div>

    );
}
export default Navbar;