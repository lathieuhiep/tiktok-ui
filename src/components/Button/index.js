import './Button.scss';
import {Link} from "react-router-dom";
function Button({to, href, primary = false, outline =false, children, onClick, ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if ( to ) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = {
        primary: primary ? ' btn-primary' : '',
        outline: outline ? ' btn-outline' : ''
    }

    return (
        <Comp className={`btn${classes.primary + classes.outline}`} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button;