import '@/app/globals.css'
export default function FetchLoader (){
    return(
        <div className=" grid grid-cols-4 place-content-center gap-4">
            <div className="w- h-[200px] preloader border-none bg-gray-300 "></div>
            <div className="w- h-[200px] preloader border-none bg-gray-300 "></div>
            <div className="w- h-[200px] preloader border-none bg-gray-300 "></div>
            <div className="w- h-[200px] preloader border-none bg-gray-300 "></div>
        </div>
    )
}