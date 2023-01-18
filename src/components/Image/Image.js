import PropTypes from 'prop-types'

// dùng forwardRef để lấy ref phục vụ cho hover ra popper
import { useState, forwardRef } from 'react'
import images from '~/assets/images'
import classNames from 'classnames'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(customFallback)
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image
