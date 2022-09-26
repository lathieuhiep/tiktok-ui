import PropTypes from "prop-types";

import './SuggestedAccounts.scss';

import AccountItem from "./AccountItem";

function SuggestedAccounts({ label }) {
    return (
        <div className="suggested-accounts">
            <p className="suggested-accounts__label">
                {label}
            </p>

            <div className="suggested-accounts__list">
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}

export default SuggestedAccounts