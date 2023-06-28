import React from "react";
import { FaCog, FaPlus } from 'react-icons/fa'
import Link from 'next/link';

const SettingsPage = ({}) => {
    return (
        <div className="settingsPage">
            <Link className="dltBtn" href="/">Delete Group</Link>
        </div>
    )
}
export default SettingsPage;