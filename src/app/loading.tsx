import { Skeleton } from "@/components/ui/skeleton"
import { Logo } from "@/components/logo";

export default function Loading() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4">
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 lg:py-40 w-full max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-4 w-48 mx-auto mb-4" />
          <Skeleton className="h-16 w-full max-w-3xl mx-auto mb-8" />
          <Skeleton className="h-8 w-full max-w-lg mx-auto mb-10" />
          <div className="flex justify-center gap-6">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 md:py-28 w-full max-w-7xl">
        <Skeleton className="h-6 w-56 mx-auto mb-3" />
        <Skeleton className="h-12 w-3/4 max-w-2xl mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-8 rounded-2xl space-y-4 border">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
