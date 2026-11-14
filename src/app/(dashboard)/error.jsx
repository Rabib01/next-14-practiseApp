"use client";

// errors we catch at the browser level and so the error components must have the use client directive

import { useEffect } from "react";

export default function Error({ error, reset }) {
  // reset will just allow us to render this thing again !
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <div>
        <h2>Something went wrong!</h2>
        <button
          className="mt-6 bg-amber-600 font-extrabold px-3 py-2 rounded text-gray-50"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </>
  );
}

{
  /**
   * RootLayout
   *  Dashboard Layout
   *    Dashboard  ! 
   * 
   * actual structure for the error boundary : Note : that error boundary lives one layet below layouts 
   *
   * <RootLayout>
      <Suspense fallback={<DashboardLoading or any other loading components  !1/>}>
          <DashboardLayout>
              <ErrorBoundary fallback={<ErroComponent/>} >
                  <Analytics/>
              </ErrorBoundary>
          </DashboardLayout>
      </Suspense>
    </RootLayout>
   * 
   * This has important implications - this means that if dashboardLayot has errors, it will not be able to catch this error 
   * only for the dashb oard and stuffs !
   * ora client component er jinish er error o dhorte parbe server components er o !  
   * 
   * <RootLayout>
        <Suspense fallback={<DashboardLoading or any other loading components  !1/>}>
            <ErrorBoundary fallback={<RootErroComponent/>}>
                <DashboardLayout>
                    <ErrorBoundary fallback={<ErroComponent/>} >
                        <Analytics/>
                    </ErrorBoundary>
                </DashboardLayout>
        </Suspense>
      </ErrorBoundary>
    </RootLayout>
    * something like this - fuck noting 
    * if I had kep an error.js file in the analutics folder then it will catch all errors regariding the analyticsw page 
    * root layout e error hoile goa mara sara obosthai thaka lagbe ! 
    * we need to create global-error.js file to be able to catch errors from rootlayout.js files 
    * but practically ei layout file e error hoile bad baki app kaaj korar e kotha na and so roduction e bokahoda hoye thaka lagbe  ! 
    * but eikhane html and body tags sob e dite hobe 
    * it is recommemded not to keep an error file in the global 
    * in cases for example autentication error - we are getting stuff related to authentication and fetching - in these cases we can think of keeping a global-error.js file 
    * global-error.js thakleo it is still recommended to get a root-error.js file 
    * aro nekra hocche j development environment e eita nao dekte pari amra - eita amra dekte parbo only in the production nvironent 
    * 
   */
}
