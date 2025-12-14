import {Button} from '@heroui/react';
import Link from "next/link";

interface IProps {
    link: string;
    text: string;
}

export default function ButtonPrimary({ link, text }: IProps) {
    return (
        <div>
            <Link href={link}>
                <Button>{text}</Button>
            </Link>
        </div>
)
}