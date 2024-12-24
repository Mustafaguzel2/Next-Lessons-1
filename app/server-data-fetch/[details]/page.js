import Link from "next/link";
async function fetchUserDetails(currentUserId) {
    try{
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`
            , {
                cache: 'force-cache'
            }
        );
        const res = await apiResponse.json();

        return res; 
    }catch(error) {
        throw new Error(error);
    }
}
export default async function UserDetails({params}) {

    const userDetails = await fetchUserDetails(params.details);
    
    return <div>
        <h1>User Details page</h1>
        <p>Name: {userDetails?.firstName} {userDetails?.lastName}</p>
        <p>Age: {userDetails?.age}</p>
        <p>{userDetails?.email}</p>
        <p>{userDetails?.phone}</p>
        <p>{userDetails?.address?.street}</p>
        <Link href="/server-data-fetch">Navigate to User List Page</Link>
    </div>;
}