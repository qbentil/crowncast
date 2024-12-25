// In Next.js, this file would be called: app/providers.jsx
"use client";

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_error, query) => {
      if (query?.meta?.errorMessage) {
        toast.error(query?.meta?.errorMessage as string, {
          toastId: "query-error",
        })
      }
    },
  }),
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 30 * 1000,
    },
  },
});

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
