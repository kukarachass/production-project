"use client"

import Image from "next/image";
import Link from "next/link";
import {Button} from "@heroui/react";
import cn from "classnames";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/app/config/config";
import {layoutConfig} from "@/app/config/layout.config";
import LoginForm from "@/app/Forms/LoginForm";
import RegisterForm from "@/app/Forms/RegisterForm";
import AuthForm from "@/app/Forms/AuthForm";


export default function HeaderNav() {

    const getNavItems = () => {
        return (
            siteConfig.navItems.map((item) => {
                const isActive = pathName === item.href;
                return (
                    <Link
                        // Сохраняем items-center для центрирования текста (item.label)
                        className={cn("cursor-pointer h-9 bg-neutral-800 relative flex items-center justify-center gap-2 text-sm font-bold rounded-md px-3", item.classname, {
                            [item.active]: isActive,
                        })}
                        href={item.href}
                        key={item.href}
                    >
                        {/* Добавляем обертку с flex items-end h-full */}
                        <div className="flex items-end h-full">
                            {/* Убедитесь, что здесь нет self-end */}
                            <Image className="object-contain" src={item.image} width={35} height={35}
                                   alt={item.label}/>
                        </div>
                        {item.label}
                    </Link>
                )
            })
        )
    }

    const pathName = usePathname(); // navLink

    return (
        <div className={`flex items-center justify-between p-6 bg-neutral-900 h-[${layoutConfig.headerHeight}]`}>
            <div className="flex items-center gap-3">
                <Image src="/logo2.svg" alt="logo" width={35} height={35}/>
                <span className="font-bold text-lg">recipe.</span>
            </div>
            <div className="flex items-center gap-4">
                {getNavItems()}
            </div>
            <div className="flex flex-wrap gap-3">
                {/*<LoginForm/>*/}
                {/*<RegisterForm/>*/}
                {/*<Button className={"bg-inherit border border-gray-700 "} variant="secondary">Sign Out</Button>*/}
                <AuthForm/>
            </div>
        </div>
    )
}