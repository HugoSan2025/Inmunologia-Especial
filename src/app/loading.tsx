import { Skeleton } from "@/components/ui/skeleton"
import { Logo } from "@/components/logo";

export default function Loading() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <div className="w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col items-center text-center">
          <Logo />
           <Skeleton className="h-6 w-3/4 max-w-2xl mt-4" />
        </header>
        
        <div className="mb-8 flex w-full max-w-2xl mx-auto items-center space-x-2">
            <Skeleton className="h-10 flex-grow" />
            <Skeleton className="h-10 w-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-start">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-5 w-1/4" />
              </div>
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="pt-4 space-y-3">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
