'use server'
export default async function CourseRequest(){
    try{
        const response = await fetch('https://intellex-48404-default-rtdb.firebaseio.com/courses.json')
       
        if(!response.ok){
           throw new Error (`Error requesting data ! ${response.status} - ${response.statusText}`)
        }
        const data = await response.json()
        return data;
    }catch (error){
        return{message:error.message,
            status:error.status || 500,
            statusText:error.statusText || "internal server error"
        }
    }

    
}