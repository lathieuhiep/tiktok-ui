import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from "../../../Popper";
import './Header.scss';
import images from "../../../../assets/images";
import AccountItem from "../../../AccountItem";


function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])

    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <div className="search">
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className="search-result" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className="search-result__title">
                                        Accounts
                                    </h4>

                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
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
                    </Tippy>
                </div>

                <div className="actions"></div>
            </div>
        </header>
    )
}

export default Header