import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import routesConfig from '~/config/routes.js'

import styles from './Header.module.scss'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { MessegeIcon, InboxIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
]

function Header() {
    const currentUser = true

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle language
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Hồ sơ',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img
                        className={cx('logo')}
                        src="https://sweetvioletbakes.com/wp-content/uploads/2020/04/tiktok-logo-9.png"
                        alt=""
                    />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        // kiểm tra nếu có user login sẽ hiển thị giao diện đã đăng nhập
                        <div className={cx('current-user')}>
                            <Button text icon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessegeIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        // nếu không sẽ hiển thị nút tải lên và đăng nhập
                        <div>
                            <Button text icon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </div>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            // nếu có user login sẽ hiển thị avatar và dùng lại menu cũ
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/314469309_803074607642457_2190012754834634057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nFhwF3wiu5AAX_Gndjo&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDcAOaF4SXTAGbCGwqsr7jDxJ16gwOZjOFg9M9i7iw0Qw&oe=63C7CBBB"
                                alt="Vo Khai"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
