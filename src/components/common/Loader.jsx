import React from "react";
import { Space, Spin } from "antd";

export default function Loader(){
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <Space size="middle">
                <Spin size="large" />
            </Space>
            <p>Chargement veuillez patientez...</p>
        </div>
    )
}