import * as React from "react"
import Image from "next/image"
import {
    Album,
    CreditCard,
    Globe,
    Keyboard,
    LayoutGrid,
    Library,
    ListMusic,
    LogOut,
    Mail,
    MessageSquare,
    Mic,
    Mic2,
    Music,
    Music2,
    PlayCircle,
    Plus,
    PlusCircle,
    Podcast,
    Radio,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
]

interface Album {
    name: string
    artist: string
    cover: string
}

const listenNowAlbums: Album[] = [
    {
        name: "Async Awakenings",
        artist: "Nina Netcode",
        cover:
            "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80",
    },
    {
        name: "The Art of Reusability",
        artist: "Lena Logic",
        cover:
            "https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80",
    },
    {
        name: "Stateful Symphony",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
    },
    {
        name: "React Rendezvous",
        artist: "Ethan Byte",
        cover:
            "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80",
    },
]

const madeForYouAlbums: Album[] = [
    {
        name: "Async Awakenings",
        artist: "Nina Netcode",
        cover:
            "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=300&dpr=2&q=80",
    },
    {
        name: "Stateful Symphony",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
    },
    {
        name: "Stateful Symphony",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1598062548091-a6fb6a052562?w=300&dpr=2&q=80",
    },
    {
        name: "The Art of Reusability",
        artist: "Lena Logic",
        cover:
            "https://images.unsplash.com/photo-1626759486966-c067e3f79982?w=300&dpr=2&q=80",
    },
    {
        name: "Thinking Components",
        artist: "Lena Logic",
        cover:
            "https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80",
    },
    {
        name: "Functional Fury",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
    },
    {
        name: "React Rendezvous",
        artist: "Ethan Byte",
        cover:
            "https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80",
    },
]

export function AppleMusicDemo() {
    return (
        <div className="overflow-hidden rounded-md border border-slate-200 bg-gradient-to-b from-rose-500 to-indigo-700 shadow-2xl dark:border-slate-800">
            <div className="rounded-md bg-white shadow-2xl transition-all dark:bg-slate-900">
                <div className="col-span-4 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-4">
                    <div className="h-full px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Listen Now
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Top picks for you. Updated daily.
                                </p>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                            <div className="relative flex space-x-4">
                                {listenNowAlbums.map((album) => (
                                    <AlbumArtwork
                                        key={album.name}
                                        album={album}
                                        className="w-[250px]"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Made for You
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Your personal playlists. Updated daily.
                            </p>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                            <ScrollArea>
                                <div className="flex space-x-4 pb-4">
                                    {madeForYouAlbums.map((album) => (
                                        <AlbumArtwork
                                            key={album.name}
                                            album={album}
                                            className="w-[150px]"
                                            aspectRatio={1 / 1}
                                        />
                                    ))}
                                </div>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                    </div>
                </div>
                <Dialog>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Podcast</DialogTitle>
                            <DialogDescription>
                                Copy and paste the podcast feed URL to import.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="url">Podcast URL</Label>
                                <Input
                                    id="url"
                                    placeholder="https://example.com/feed.xml"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button>Import Podcast</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
    album: Album
    aspectRatio?: number
}

function AlbumArtwork({
    album,
    aspectRatio = 3 / 4,
    className,
    ...props
}: AlbumArtworkProps) {
    return (
        <div className={cn("space-y-3", className)} {...props}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <AspectRatio
                        ratio={aspectRatio}
                        className="overflow-hidden rounded-md"
                    >
                        <Image
                            src={album.cover}
                            alt={album.name}
                            fill
                            className="object-cover transition-all hover:scale-105"
                        />
                    </AspectRatio>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-40">
                    <ContextMenuItem>Add to Library</ContextMenuItem>
                    <ContextMenuSub>
                        <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                            <ContextMenuItem>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                New Playlist
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            {playlists.map((playlist) => (
                                <ContextMenuItem key={playlist}>
                                    <ListMusic className="mr-2 h-4 w-4" /> {playlist}
                                </ContextMenuItem>
                            ))}
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Like</ContextMenuItem>
                    <ContextMenuItem>Share</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{album.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                    {album.artist}
                </p>
            </div>
        </div>
    )
}