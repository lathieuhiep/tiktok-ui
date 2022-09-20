import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

function Header({ title, onBack }) {
    return (
        <header className="header-item">
            <button className="btn-back" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <h4 className="header-item__title">
                {title}
            </h4>
        </header>
    )
}

export default Header