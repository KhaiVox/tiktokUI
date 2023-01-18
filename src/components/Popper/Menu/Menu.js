import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import Header from './Header'
import MenuItem from './MenuItem'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { useState } from 'react'

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            // trong trường hợp có children sẽ trả về true
            const isParent = !!item.children

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    const handleBack = () => {
        // xóa thèn cuối
        setHistory((prev) => prev.slice(0, prev.length - 1))
    }

    return (
        <Tippy
            // visible
            delay={[0, 500]}
            // set lại vị trí ngang dọc sao cho vừa mắt
            offset={[12, 10]}
            interactive
            // click vào avatar k ẩn popper
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            // khi ẩn đi sẽ reset lại menu trang 1
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1))
            }}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu
