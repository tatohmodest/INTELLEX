import { Fragment } from "react"

import Hero from "@/components/home/hero/hero"
import QueryClientWrapProvider from "@/components/tanstackQuery/QueryProvider"
import WhyInTelleX from "@/components/home/whyUs/whyUs"
import LogoCall from "@/components/home/companyauth/authCompanyLogo"
import CoursesOne from "@/components/home/Courses/Courses"
import Categories from "@/components/home/Categoreis/Categories"
import CoursesTwo from "@/components/home/Courses/Courses2"
import Instructor from "@/components/home/InStructor/Instructor"
import Testimonials from "@/components/home/Testimonials/Testimonials"
import BecomeInStructor from "@/components/home/InStructor/becomeInStructor"
export default function HomePage(){
    return (
        <Fragment>
             <Hero />
        <LogoCall />
          <WhyInTelleX />
         <QueryClientWrapProvider >
          <CoursesOne />
         </QueryClientWrapProvider>
        <Categories />
        <QueryClientWrapProvider >
             <CoursesTwo />
             </QueryClientWrapProvider>
             <Instructor />
             <QueryClientWrapProvider>
                <Testimonials />
             </QueryClientWrapProvider>
             <BecomeInStructor />

        </Fragment>
      
       
    )
}