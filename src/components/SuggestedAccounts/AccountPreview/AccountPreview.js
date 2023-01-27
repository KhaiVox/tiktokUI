import classNames from 'classnames/bind'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './AccountPreview.module.scss'
import Image from '~/components/Image'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/314469309_803074607642457_2190012754834634057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nFhwF3wiu5AAX_Gndjo&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDcAOaF4SXTAGbCGwqsr7jDxJ16gwOZjOFg9M9i7iw0Qw&oe=63C7CBBB"
                    alt=""
                />
                <Button primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>khaivox</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Võ Khải</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>10.5M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    )
}

export default AccountPreview
