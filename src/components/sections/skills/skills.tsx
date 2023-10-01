import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiReact,
    DiPython,

} from "react-icons/di";

import {IoLogoJavascript, IoLogoNodejs} from "react-icons/io"
import {BiSolidFileHtml, BiSolidData} from "react-icons/bi"
import {
    SiNextdotjs, SiCss3
} from "react-icons/si";
import {PiFileSqlLight} from "react-icons/pi"
import style from "./skills.module.scss";
import cN from "classnames"

const SkillsCard = () => {
    return (
        <>
        
            <div className={style["skill-container"]} style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <DiReact />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <IoLogoJavascript />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <SiCss3 />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <BiSolidFileHtml />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <SiNextdotjs />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <IoLogoNodejs />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <DiPython />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <PiFileSqlLight />
                </div>
                <div className={cN(style["tech-icons"], "border border-gray-200 rounded-lg shadow dark:border-gray-700 h-20 w-auto")}>
                    <BiSolidData />
                </div>
            </div>
        </>
    )
}

export default SkillsCard