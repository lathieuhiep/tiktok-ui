import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCloudUpload, faCoins,
    faEarthAsia,
    faEllipsisVertical, faGear, faKeyboard,
    faSignOut,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/";
import 'tippy.js/dist/tippy.css';

import './Header.scss';
import images from "../../../../assets/images";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import {MessageIcon} from "../../../Icons";
import Image from "../../../Image";
import Search from "../Search";

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
    const currentUser = true

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}
                <Search />

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
                                    <MessageIcon />
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
                        <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                            {currentUser ? (
                                <Image
                                    className="user-avatar"
                                    src={images.avatarDefault}
                                    alt="Nguyen Van A"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
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