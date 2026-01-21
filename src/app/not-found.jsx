 import Link from 'next/link'
 
export default function NotFound() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
      <div className="max-w-xl w-full text-center rounded-2xl border border-base-300 bg-base-200 shadow-lg p-8">
        
        <div className="text-6xl font-extrabold text-primary mb-4">404</div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Page Not Found
        </h1>
        
        <p className="text-neutral/70 mb-6">
          Oops! The page you are looking for does not exist. <br />
          Maybe the link is broken or the page has been removed.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="btn btn-primary rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition"
          >
            Go to Home
          </Link>

          <Link
            href="/items"
            className="btn btn-outline rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition"
          >
            Browse Items
          </Link>
        </div>

        <div className="mt-6 text-xs text-neutral/60">
          If you think this is a mistake, please check the URL again.
        </div>
      </div>
    </div>
  )
}
 
 
 