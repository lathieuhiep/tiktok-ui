import Tippy from "@tippyjs/react/headless";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountPreview from "./AccountPreview";

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className="tippy-warp" tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <Tippy
            interactive
            delay={[800,0]}
            offset={[-12, 12]}
            placement="bottom"
            render={renderPreview}
            appendTo={document.body}
        >
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
        </Tippy>
    )
}

export default AccountItem