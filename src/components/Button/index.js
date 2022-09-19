import './Button.scss';
import {Link} from "react-router-dom";

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if ( disabled ) {
        delete props.onClick
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = {
        primary: primary ? ' btn-primary' : '',
        outline: outline ? ' btn-outline' : '',
        text: text ? ' btn-text' : '',
        disabled: disabled ? ' btn-disabled' : '',
        rounded: rounded ? ' btn-rounded' : '',
        small: small ? ' btn-small' : '',
        large: large ? ' btn-large' : '',
    }

    return (
        <Comp className={`btn${classes.primary + classes.outline + classes.text + classes.disabled + classes.rounded + classes.small + classes.large}`} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button;