import { Fragment } from "react"

import Hero from "@/components/home/hero/hero"
import QueryClientWrapProvider from "@/components/tanstackQuery/QueryProvider"
import WhyInTelleX from "@/components/home/whyUs/whyUs"
import LogoCall from "@/components/home/companyauth/authCompanyLogo"
import CoursesOne from "@/components/home/Courses/Courses"
export default function HomePage(){
    return (
        <Fragment>
             <Hero />
        <LogoCall />
          <WhyInTelleX />
         <QueryClientWrapProvider >
          <CoursesOne />
         </QueryClientWrapProvider>
        
             
        </Fragment>
       
    )
}