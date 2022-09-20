import {Wrapper as PopperWrapper} from "../index";
import Tippy from '@tippyjs/react/headless';
import MenuItem from "./MenuItem";

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return(
        <Tippy
            interactive
            placement={'bottom-end'}
            delay={[0, 700]}
            render={attrs => (
                <div className="menu-items" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>


    )
}

export default Menu