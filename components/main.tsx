import * as React from "react"

import { Button } from "@/components/ui/button"

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
import { banner,secondaryBanner, list1, list2 } from "@/config/mock";
import AdCard from "./ad-card"

export function AppleMusicDemo(props) {

    return (
        <div className="overflow-hidden shadow-2xl">
            <div className="bg-white shadow-2xl transition-all dark:bg-slate-900">
                <div className="col-span-4 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-4">
                    <div className="h-full px-8 py-6">
                        <div>
                            <div className="flex items-center justify-between flex-wrap">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-semibold tracking-tight">
                                        Main banner
                                    </h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        love it?
                                    </p>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="relative grid grid-cols-2 space-x-4">
                                {banner.map((album) => (
                                    <AdCard
                                        key={album.name}
                                        album={album}
                                        aspectRatio={4 / 3}
                                        // className="h-[300px] overflow-hidden"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Secondary banner
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    this is for you
                                </p>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative grid grid-cols-3 space-x-4">
                            {secondaryBanner.map((album) => (
                                <AdCard
                                    key={album.name}
                                    album={album}
                                />
                            ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Secondary banner
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    this is for you
                                </p>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative grid grid-cols-5 space-x-4">
                            {list1.map((album) => (
                                <AdCard
                                    key={album.name}
                                    album={album}
                                />
                            ))}
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
                                <div className="grid grid-cols-7 space-x-4 pb-4">
                                    {list2.map((album) => (
                                        <AdCard
                                            key={album.name}
                                            album={album}
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
                            <DialogTitle>Add Your ad address</DialogTitle>
                            <DialogDescription>
                                Copy and paste the ad URL to import.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="url">Ad URL</Label>
                                <Input
                                    id="url"
                                    placeholder="https://yourwebsiteurl.com/feed.xml"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button>Upload</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}