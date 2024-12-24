import Link from "next/link";
async function fetchListOfUsers() {
    try{
        const apiResponse = await fetch('https://dummyjson.com/users'
            , {
                cache: 'force-cache'
            }
        );
        const res = await apiResponse.json();

        return res.users; 
    }catch(error) {
        throw new Error(error);
    }
}
export default async function ServerSideDataFetching() {
    const lisOfUsers = await fetchListOfUsers();
    
    return <div className="p-10">
        <h1>Server Side Data Fetching : User List Page</h1>
        <ul>
            {
                lisOfUsers && lisOfUsers.length > 0 ?
                lisOfUsers.map((user) => {
                    return <li className="mt-5 cursor-pointer"><Link href={`/server-data-fetch/${user.id}`}>{user.id} - {user.firstName} {user.lastName}</Link></li>
                }) : <p>No users found</p>
            }
        </ul>
    </div>;
}