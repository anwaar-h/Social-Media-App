import {Card, Skeleton , Spinner} from "@heroui/react";

export default function SkeletonCard() {
    return (
    <div className='justify-center items-center py-5 h-100'>
    <Card className="w-full space-y-5 p-5 py-10 h-80" radius="lg">
        <div className="space-y-3">
    <div className="max-w-[300px] w-full flex items-center gap-3">
    <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
    </div>
    <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
    </div>
    </div>
        <Skeleton className="rounded-lg">
            <div className="h-35 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200" />
        </Skeleton>
        </div>
    </Card>
    <div className="flex justify-center items-center h-[10vh]">
        <Spinner color="default" classNames={{label: "text-foreground mt-4"}} variant="dots" />
    </div>
    </div> 
    )
}
