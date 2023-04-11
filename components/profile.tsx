import * as React from "react"
import {
    LogOut,
    Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Profile() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect({
        onError(error) {
            console.log('Error', error)
        }
    })
    if (!isConnected) return <Button onClick={() => connect()}>Connect Wallet</Button>
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="relative h-10 w-10 rounded-full"
                    >
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Address</DialogTitle>
                        <DialogDescription>
                            <span>{ensName ?? address}</span>                            </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => disconnect()}>disconnect</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
