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
    separate = false,
    leftIcon,
    rightIcon,
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
        primary: primary ? 'btn-primary' : '',
        outline: outline ? 'btn-outline' : '',
        text: text ? 'btn-text' : '',
        disabled: disabled ? 'btn-disabled' : '',
        rounded: rounded ? 'btn-rounded' : '',
        small: small ? 'btn-small' : '',
        large: large ? 'btn-large' : '',
        separate: separate ? 'separate' : ''
    }

    const resultClasses = Object.values(classes).filter(element => {
        return element !== '';
    });

    let newClasses = '';
    if ( resultClasses.length ) {
        newClasses = resultClasses.toString().replace(",", " ")
    }

    return (
        <Comp className={`btn${newClasses ? ' ' + newClasses : ''}`} {...props}>
            {leftIcon && <span className="icon left-icon">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="icon right-icon">{rightIcon}</span>}
        </Comp>
    )
}

export default Button;