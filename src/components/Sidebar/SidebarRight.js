import React from 'react'

const SidebarRight = () => {
    return (
        <aside className='control-sidebar control-sidebar-dark'>
            <div className='p-3'>
                <div className='card'>
                    <div className='card-header'>
                        My Profile
                    </div>
                    <img src='https://source.unsplash.com/random/400x400' className='card-img-top' alt='not found'/>
                    <div className='card-body'>
                        Some text
                    </div>
                    <div className='card-footer'>
                        footer
                    </div>
                </div>
            </div>
        </aside>
        )
}

export default SidebarRight