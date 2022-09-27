import images from "../../../assets/images";
import Button from "../../Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

function AccountPreview() {
    return (
        <div className="account-preview">
            <div className="top-box">
                <img className="avatar" src={images.avatarDefault} alt=""/>

                <Button primary small>Follow</Button>
            </div>

            <div className="info">
                <p className="nickname">
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>

                <p className="name">
                    Quoc Nguyen Phu
                </p>

                <div className="analytics">
                    <strong className="value">8.2M</strong>
                    <span className="label">Followers</span>

                    <strong className="value">8.2M </strong>
                    <span className="label">Likes</span>
                </div>
            </div>
        </div>
    )
}

export default AccountPreview