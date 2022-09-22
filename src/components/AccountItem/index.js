import { Link } from "react-router-dom";
import './AccountItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.username}`} className="account-wrapper">
            <div className="avatar">
                <img src={images.avatarDefault} alt="Hoa" />
            </div>

            <div className="info">
                <h4 className="name">
                    <span>{data.name}</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>

                <span className="username">{data.username}</span>
            </div>
        </Link>
    )
}

export default AccountItem