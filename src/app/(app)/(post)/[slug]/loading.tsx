import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingPostPage() {
  return (
    <div className="flex w-full max-w-7xl gap-12">
      <div className="w-full h-full max-w-sm space-y-8">
        <div className="flex flex-col gap-4">
          <Skeleton className="w-80 h-6" />
          <div className="flex flex-col gap-2 pb-4">
            <Skeleton className="w-48 h-6" />
            <Skeleton className="w-48 h-6" />
            <Skeleton className="w-48 h-6" />
          </div>
          <Skeleton className="w-80 h-6" />
          <div className="w-full h-[500px] border p-6">
            <Skeleton className="w-full aspect-video" />
            <div className="flex gap-2 py-8">
              <Skeleton className="w-28 h-6 rounded-full" />
              <Skeleton className="w-28 h-6 rounded-full" />
              <Skeleton className="w-28 h-6 rounded-full" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm pt-8">
              <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-48 h-4" />
              </div>{' '}
              <Skeleton className="w-48 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full space-y-12">
        <div className="w-full max-w-2xl bg-background">
          <div className="flex gap-2">
            <Skeleton className="w-28 h-6 rounded-full" />
            <Skeleton className="w-28 h-6 rounded-full" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>
          <div className="flex flex-col gap-2 py-8">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="w-48 h-4" />
              </div>{' '}
              <Skeleton className="w-48 h-4" />
            </div>
          </div>
        </div>
        <Skeleton className="w-full h-full aspect-video" />
      </div>
    </div>
  )
}
