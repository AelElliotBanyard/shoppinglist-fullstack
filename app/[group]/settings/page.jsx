"use client"
import React from "react";
import { deleteGroup } from "@/lib/databaseGroup"
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'

const SettingsPage = ({params}) => {
    const {group} = params
    const router = useRouter()
    return (
        <div className="settingsPage">
            {/* <input className="settingsTitle" type="text" value={data.title}/> */}
          
        <div className="settingsHeader">
        <Link href={`/${params.group}`} className="back"><IoIosArrowBack size={32} /></Link>
        <h1 className="settingsTitle">settings</h1>
        <Link href={`/${params.group}`} className="homeBtn"><FaHome size={32} /></Link>
        </div>
            <button className="dltBtn" onClick={(e) => {
                e.preventDefault()
                deleteGroup(group)
                router.replace("/")
            }}>Delete Group</button>
        </div>
    )
}
export default SettingsPage;