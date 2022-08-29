import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";

import './Header.scss';
import images from "../../../../assets/images";


function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <div className="search">
                    <form className="search__form">
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className="btn-clear">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <div className="loading">
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>

                        <button className="btn-search">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>

                <div className="actions"></div>
            </div>
        </header>
    )
}

export default Header