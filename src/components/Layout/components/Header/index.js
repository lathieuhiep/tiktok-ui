import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark, faCloudUpload,
    faEarthAsia,
    faEllipsisVertical, faKeyboard, faMessage,
    faSearch,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/";
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from "../../../Popper";
import './Header.scss';
import images from "../../../../assets/images";
import imageAvatar from "../../../../assets/images/avatar-default.png";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vn',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    const currentUser = true

    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <div className="search">
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className="search-result" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className="search-result__title">
                                        Accounts
                                    </h4>

                                    <div className="list-account">
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </div>
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
                    </HeadlessTippy>
                </div>

                <div className="actions">
                    <div className="left-box">
                        {currentUser ? (
                            <>
                                <Tippy content="Upload video" placement={'bottom'}>
                                    <button className="btn-action">
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>

                                <button type="button" className="btn-action">
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>

                                <Button primary>Log in</Button>
                            </>
                        )}
                    </div>

                    <div className="right-box">
                        <Menu items={MENU_ITEMS}>
                            {currentUser ? (
                                <img className="user-avatar" src={imageAvatar} alt=""/>
                            ) : (
                                <button className="btn-more">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header