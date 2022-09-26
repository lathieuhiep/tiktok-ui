import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const handelActiveMenu = (nav) => {
    console.log(nav)
    return nav.isActive ? 'active' : ''
}

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => handelActiveMenu(nav)} to={to}>
            {icon}
            <span>{title}</span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default MenuItem