import './AccountItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import imagesAvatarDefault from '../../assets/images/avatar-default.png'

function AccountItem() {
    return (
        <div className="account-wrapper">
            <img className="avatar" src={imagesAvatarDefault} alt="Hoa" />
            <div className="info">
                <p className="name">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>

                <span className="username">nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem