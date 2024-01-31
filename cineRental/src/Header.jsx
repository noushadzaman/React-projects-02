import Logo from './assets/logo.svg';
import ring from "./assets/ring.svg";
import sun from './assets/icons/sun.svg';
import moon from './assets/icons/moon.svg';
import shoppingCart from "./assets/shopping-cart.svg";
import CartDetails from './cine/CartDetails';
import { useContext, useState } from 'react';
import { MovieContext, ThemeContext } from './context';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const { state, dispatch } = useContext(MovieContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleCartShow = () => {
        setShowCart(true);
    }

    return (
        <header>
            {
                showCart && <CartDetails onClose={() => setShowCart(false)} />
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="/">
                    <img src={Logo} width="139" height="26" alt="logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="ring" />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setDarkMode(!darkMode)}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block cursor-pointer">
                            <img src={darkMode ? sun : moon} width="24" height="24" alt="sun" />
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={handleCartShow}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={shoppingCart} width="24" height="24" alt="shopping cart" />
                            <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                                {
                                    state.cartData.length
                                }
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;