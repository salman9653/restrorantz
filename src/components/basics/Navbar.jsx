import React from 'react'

const Navbar = ({ filter, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((item) => {
                        return (
                            <button className="btn-group__item" onClick={() => filter(item)}>{item}</button>

                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Navbar
