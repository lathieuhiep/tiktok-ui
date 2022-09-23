import {Wrapper as PopperWrapper} from "../index";
import Tippy from '@tippyjs/react/headless';
import MenuItem from "./MenuItem";
import Header from "./Header";
import {useState} from "react";

function Menu({ children, items = [], hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className="menu-items" tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && (
                    <Header
                        title="Language"
                        onBack={handleBack}
                    />
                )}

                <div className="action-list">
                    {renderItems()}
                </div>
            </PopperWrapper>
        </div>
    )

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if ( isParent ) {
                            setHistory(prev => [...prev, item.children])
                        }
                    }}
                />
            )
        })
    }

    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1) )
    }

    return(
        <Tippy
            interactive
            placement={'bottom-end'}
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    )
}

export default Menu