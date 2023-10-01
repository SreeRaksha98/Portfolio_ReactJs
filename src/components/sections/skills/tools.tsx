import React from "react";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiPycharm,
    SiNpm,
    SiJira,
    SiCodepen,
    SiCodesandbox,
    SiUbuntu, SiMysql, SiGithub
} from "react-icons/si";

import style from "./skills.module.scss";
import cN from "classnames"

function Toolstack() {
    return (
        <div className={style["skill-container"]} style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiLinux />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiVisualstudiocode />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiPostman />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiVercel />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiPycharm />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiNpm />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiJira />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiCodepen />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiCodesandbox />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiUbuntu />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiMysql />
            </div>
            <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                <SiGithub />
            </div>
        </div>
    );
}

export default Toolstack;