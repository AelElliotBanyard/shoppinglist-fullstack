"use client"
import React from "react";
import { deleteGroup } from "@/lib/databaseGroup"
import { useRouter } from "next/navigation";

const SettingsPage = ({params}) => {
    const {group} = params
    const router = useRouter()
    return (
        <div className="settingsPage">
            {/* <input className="settingsTitle" type="text" value={data.title}/> */}
            <button className="dltBtn" onClick={(e) => {
                e.preventDefault()
                deleteGroup(group)
                router.replace("/")
            }}>Delete Group</button>
        </div>
    )
}
export default SettingsPage;