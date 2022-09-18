import './AccountItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import imagesAvatarDefault from '../../assets/images/avatar-default.png'

function AccountItem() {
    return (
        <div className="account-wrapper">
            <div className="avatar">
                <img src={imagesAvatarDefault} alt="Hoa" />
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