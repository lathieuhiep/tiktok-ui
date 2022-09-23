import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to}>
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