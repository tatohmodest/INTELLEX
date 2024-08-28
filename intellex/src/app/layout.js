


import './FontAwesomeConfig'

import classes from "./globals.css";
import Header from "@/components/home/header/header";

export const metadata = {
  title: "InTelleX",
  description: "Welcome to InTelleX, your gateway to limitless learning and professional growth. Whether you're looking to acquire new skills, earn industry-recognized certifications, or join a vibrant community of learners and experts, InTelleX is here to guide you every step of the way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={classes.body}>
        <Header />
        {children}
        </body>
    </html>
  );
}
