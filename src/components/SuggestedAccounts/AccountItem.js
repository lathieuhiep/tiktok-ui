import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import images from "../../assets/images";

function AccountItem() {
    return (
        <div className="account-item">
            <div className="thumbnail">
                <img src={images.avatarDefault} alt="avatar" />
            </div>

            <div className="info">
                <p className="nickname">
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>

                <p className="name">
                    Quoc Nguyen Phu
                </p>
            </div>
        </div>
    )
}

export default AccountItem