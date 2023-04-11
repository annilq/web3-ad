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
import Image from "next/image"
import {
    ListMusic,
    PlusCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Album } from "@/config/mock";

interface AdCardProps extends React.HTMLAttributes<HTMLDivElement> {
    album: Album
    aspectRatio?: number
}
const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
]

export default function AdCard({
    album,
    aspectRatio = 3 / 4,
    className,
    ...props
}: AdCardProps) {
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