import { useContext } from 'react'
import { Navbar as HeroUINavbar , NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../contexts/AuthContext'
import { counterContext } from '../contexts/CounterContext'


export default function Navbar() {
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useContext(authContext)
    const {counter} = useContext(counterContext)

    function signout(){
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        navigate("/login")
    }

    return (
    <HeroUINavbar>
        <NavbarBrand>
            <Link to={"/"} className="font-bold text-inherit">CIRCLE</Link>
        </NavbarBrand>
        <NavbarContent justify="end">
            {
                isLoggedIn ?
                <NavbarItem>
                <Button onPress={signout} color="danger" variant="flat">
                Sign Out
                </Button>
                </NavbarItem>
                :
                <>
                <NavbarItem className='hidden lg:flex'>
                <Link className='cursor-pointer' to={"/login"}>Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button onPress={() => navigate("/register")} color="primary" variant="flat">
                Sign Up
                </Button>
                </NavbarItem>
                </>
            }        
        </NavbarContent>
    </HeroUINavbar>
    )
}
