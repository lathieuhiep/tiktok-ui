import './AccountItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";

function AccountItem() {
    return (
        <div className="account-wrapper">
            <div className="avatar">
                <img src={images.avatarDefault} alt="Hoa" />
            </div>

            <div className="info">
                <h4 className="name">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>

                <span className="username">nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem