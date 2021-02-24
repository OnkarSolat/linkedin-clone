import React from 'react'
import "./Sidebar.css"
import { Avatar} from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1547534887-8d299f2c126b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=zetong-li-7pUHeP1GRC4-unsplash.jpg" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Onkar Solat</h2>
                <h4>omsolat16@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">2,234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">345</p>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;
