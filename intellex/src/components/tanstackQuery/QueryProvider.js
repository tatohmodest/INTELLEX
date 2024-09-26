'use client';

import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

export const queryClient = new QueryClient()

export default function QueryClientWrapProvider({children}){
    return(
        <QueryClientProvider client={queryClient} >
         {children}
        </QueryClientProvider>
    )

}