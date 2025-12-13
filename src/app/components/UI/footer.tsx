import {layoutConfig} from "@/app/config/layout.config";

export default function Footer(){
    return(
        <div className={`flex items-center justify-center h-${layoutConfig.footerHeight} bg-neutral-900 p-7 font-bold`}>
            Netherlands National Food
        </div>
    )
}