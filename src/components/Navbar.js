import logo from '../img/logo-airbnb.png';
import 'bootstrap/dist/css/bootstrap.css';
import SoggiorniNavBar from './navbarcomponents/SoggiorniNavBar.js';
import EsperienzeNavBar from './navbarcomponents/EsperienzeNavBar.js';

this.state = {
    soggiorniSectionOpen : false,

    btnSoggiorni : document.querySelector('.btn-soggiorni'),

}

OpenSoggiorniSection = ()=> {
    // this.soggiorniSectionOpen = !this.soggiorniSectionOpen;
    this.btnSoggiorni.classList.toggle('.d-none');
}


function Navbar(){
    return(
        
        <div id="container-navbar" className="row justify-content-around">

            {/* logo */}
            <div id="container-logo-navbar" className='col-sm-12 col-md-12 col-lg-4 h-100 d-flex align-items-center justify-content-center'>
                <img className="img-fluid h-50" src={logo} alt="Logo AirBnB" />
            </div>

            {/* options section */}
            <div id="container-main-navbar" className='col-sm-12 col-md-12 col-lg-4 h-100 d-flex align-items-center justify-content-around'>
                
                {/* navbar components */}

                <div className="btn-soggiorni" onClick={OpenSoggiorniSection()}>Soggiorni</div>

                    {/* btn-soggiorni onclick show this section */}
                <div className="soggiorni-section">
                    <SoggiorniNavBar/>
                </div>

                <div className="btn-esperienze">Esperienze</div>

                    {/* btn-esperienze onclick show this section */}
                <div className="esperienze-section d-none">
                    <EsperienzeNavBar/>
                </div>

                <div className="btn-esperienze">Esperienze online</div>

            </div>

            {/* settings */}
            <div id="container-settings-navbar" className='col-sm-12 col-md-12 col-lg-4 h-100 d-flex align-items-center justify-content-center'>

            </div>

        </div>

    );
}
export default Navbar;