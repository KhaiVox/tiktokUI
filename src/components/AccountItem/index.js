import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://img.freepik.com/free-vector/tiktok-banner-with-watercolor-splatter_69286-194.jpg?w=2000"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    sfaf <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>hffh</span>
            </div>
        </div>
    )
}

export default AccountItem
