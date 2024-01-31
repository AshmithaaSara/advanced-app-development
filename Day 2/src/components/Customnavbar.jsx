import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
// import Customsidebar from './Customsidebar';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';
const CustomNavbar = () => {
    return(
        <div>
            <Navbar>
            <Nav>
            {/* <Customsidebar/> */}
            <Navbar.Brand href="#">JOB APPLICATION PORTAL</Navbar.Brand>
            <Nav.Item icon={<HomeIcon />}><Link to='/home'>Home</Link></Nav.Item>
            <Nav.Item><Link to='/about'>About</Link></Nav.Item>
            <Nav.Item><Link to='/contact'>Contact</Link></Nav.Item>
            <Nav.Item><Link to='/login'>Login</Link></Nav.Item>
            </Nav>
            </Navbar>
        </div>
    );
    }
export default CustomNavbar;