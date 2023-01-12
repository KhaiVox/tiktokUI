import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    icon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    // xóa lắng nghe sự kiện khi có "disabled"
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    }

    const classes = cx('wrapper', {
        // tự thêm class "cx" để custom
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        icon,
        small,
        large,
    })

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon-left')}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    )
}

export default Button
