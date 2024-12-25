const _404Layout = () => {
    return (
      <div className="h-screen">
        <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-primary sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-text tracking-tight sm:text-5xl">Page not found</h1>
                  <p className="mt-1 text-base text-gray">Please check the URL in the address bar and try again.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <a
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Go back home
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Contact support
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
  
  export default _404Layout