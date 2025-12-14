"use client"

import {Button, Modal} from "@heroui/react";
import {JSX} from "react";

interface Props {
    children: (close: () => void) => JSX.Element;
    title: string;
}


export default function AuthModal({children, title}: Props) {
    return(
        <Modal>
            <Button variant="primary">{title}</Button>
            <Modal.Container>
                <Modal.Dialog className="bg-neutral-900 flex flex-col gap-4">
                    {({ close }) => (
                        <>
                            <Modal.Header>
                                    <Modal.Heading className="text-center">
                                        {title}
                                    </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                { children(close) }
                            </Modal.Body>
                        </>
                    )}
                </Modal.Dialog>
            </Modal.Container>
        </Modal>
    )
}
