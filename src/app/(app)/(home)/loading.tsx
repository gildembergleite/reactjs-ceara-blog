import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingHome() {
  return (
    <>
      <div className="relative w-full max-w-7xl h-full aspect-video">
        <Skeleton className="w-full h-full aspect-video" />
        <div className="absolute -bottom-10 left-14 w-full max-w-2xl p-6 z-50 drop-shadow-sm bg-background">
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
      </div>
      <div className="w-full max-w-7xl py-24 space-y-4">
        <div className="flex gap-4">
          <Skeleton className="w-52 h-10" />
          <Skeleton className="w-32 h-10" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-full h-[500px] border p-6">
              <Skeleton key={index} className="w-full aspect-video" />
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
          ))}
        </div>
        <div className="flex w-full justify-center items-center pt-8">
          <Skeleton className="w-44 h-10" />
        </div>
      </div>
    </>
  )
}
