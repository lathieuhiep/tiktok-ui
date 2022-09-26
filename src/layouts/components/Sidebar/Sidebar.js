import config from "../../../config";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullseye, faCamera, faHome} from "@fortawesome/free-solid-svg-icons";

import './Sidebar.scss';

import Menu, { MenuItem } from "./Menu";
import SuggestedAccounts from "../../../components/SuggestedAccounts";

function Sidebar() {
    return (
        <aside className="sidebar">
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faBullseye} />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faCamera} />} />
            </Menu>

            <SuggestedAccounts label={'Suggested Accounts'} />
            <SuggestedAccounts label={'Following Accounts'} />
        </aside>
    )
}

export default Sidebar