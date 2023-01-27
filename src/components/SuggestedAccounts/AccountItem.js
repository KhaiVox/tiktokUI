// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/314469309_803074607642457_2190012754834634057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nFhwF3wiu5AAX_Gndjo&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDcAOaF4SXTAGbCGwqsr7jDxJ16gwOZjOFg9M9i7iw0Qw&oe=63C7CBBB"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>khaivox</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Võ Khải</p>
            </div>
        </div>
    )
}

// AccountItem.propTypes = {
//     data: PropTypes.object,
// }

export default AccountItem
