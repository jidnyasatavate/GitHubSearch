// import cat from './cat.png';
import cat from './Capture.JPG';
const Header = () => {
    return ( 
        <header className="row">
            <div className='col-md-2'>
                <img src={cat} className='logo' alt='Github'/>
            </div>
            <div className='col-md-10 mt-4 title' >
                <h2 className='githubTitle'><b>Github™ Play</b></h2>
                <p className='subtitle'>The Largest And Most Advanced Development Platform</p>
            </div>
        </header>
     );
}
 
export default Header;