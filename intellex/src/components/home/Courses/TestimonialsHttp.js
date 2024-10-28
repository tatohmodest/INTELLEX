export default async function Testimonial() {
    try{
        const response = await fetch ('https://intellex-48404-default-rtdb.firebaseio.com/testimonials.json')
        const data = await response.json()

        if(!response.ok){
            const error = data || "No Data Fetched"
        }

        return data;
    }
    catch(error){
        return error;
    }
    
}