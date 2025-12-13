"use client"

import Image from "next/image";
import Link from "next/link";
import {Button} from "@heroui/react";
import cn from "classnames";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/app/config/config";

export default function HeaderNav() {

    const getNavItems = () => {
        return (
            siteConfig.navItems.map((item) => {
                const isActive = pathName === item.href;
                return (
                    <Link
                        className={cn("cursor-pointer h-9 bg-neutral-800 relative inline-flex items-center justify-center gap-2 text-sm font-bold rounded-md px-3", item.classname, {
                            [item.active]: isActive,
                        })}
                        href={item.href}
                        key={item.href}
                    >
                        <Image className="self-end object-contain" src={item.image} width={35} height={35}
                               alt={item.label}/>
                        {item.label}
                    </Link>
                )
            })
        )
    }

    const pathName = usePathname(); // navLink

    return (
        <div className="flex items-center justify-between p-6 bg-neutral-900">
            <div className="flex items-center gap-3">
                <Image src="/logo2.svg" alt="logo" width={35} height={35}/>
                <span className="font-bold text-lg">recipe.</span>
            </div>
            <div className="flex items-center gap-4">
                {getNavItems()}
            </div>
            <div className="flex flex-wrap gap-3">
                <Button className=""> Sign In</Button>
                <Button className={"bg-inherit border border-gray-700 "} variant="secondary">Sign Out</Button>
            </div>
        </div>
    )
}