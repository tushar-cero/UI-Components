import React, {useState} from 'react';
import "./MenuToggle.css";

const Menutoggle = () => {

    const [ToggleChecker, setToggleChecker] = useState(false);

    const handleNav = () => {

        if(ToggleChecker) {
            setToggleChecker(false);
            let element = document.getElementById('NavigationSideDrawer');
            element.classList.remove('openNavbar');
            let menuTop = document.getElementById('menu_bar_top');
            menuTop.classList.remove('openTop');
            let menuBottom = document.getElementById('menu_bar_bottom');
            menuBottom.classList.remove('openBottom');
            
            window.onscroll = () => {};
        }
        else {
            setToggleChecker(true);
            let element = document.getElementById('NavigationSideDrawer');
            element.classList.add('openNavbar');
            let menuTop = document.getElementById('menu_bar_top');
            menuTop.classList.add('openTop');
            let menuBottom = document.getElementById('menu_bar_bottom');
            menuBottom.classList.add('openBottom');

            // Get the current page scroll position
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
    }

    return (
        <div id='header_menu' className="header_menu">
            <button onClick={()=>handleNav(ToggleChecker)} aria-label="Right Align">
                <div className='header_menu_toggle'>
                    <div id='menu_bar_top' className='menu_bar menu_bar_top'></div>
                    <div id='menu_bar_bottom' className='menu_bar menu_bar_bottom'></div>
                </div>
            </button>
        </div>
    );
}

export default Menutoggle;