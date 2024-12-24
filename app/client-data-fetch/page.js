'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {

    {/*const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    async function fetchListOfUsers() {
        try{
            const apiResponse = await fetch('https://dummyjson.com/users'
                , {
                    cache: 'force-cache'
                }
            );
            const res = await apiResponse.json();
            if(res?.users) {
                setUsers(res.users);
                setLoading(false);
            }
        }catch(error) {
            throw new Error(error);
            setUsers([]);
            setLoading(false);
        }
    }
        useEffect(() => {
        fetchListOfUsers();
    }, []);
    */}

    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);

    if(isLoading) {
        return <div>
            <h1 className="text-5xl font-bold">Loading users... Please wait!</h1>
        </div>;
    }

    if(error) {
        return <div>
            <h1 className="text-5xl font-bold">Error while fetching users! Please try again later.</h1>
        </div>;
    }

    return <div className="p-10">
    <h1>Client Side Data Fetching : User List Page</h1>
    <ul>
        {data && data.users && data.users.length > 0 ?
        data?.users.map((user) => {
            return <li className="mt-5 cursor-pointer"><Link href={`/client-data-fetch/${user.id}`}>{user.id} - {user.firstName} {user.lastName}</Link></li>
        }) : <p>No users found</p>}
    </ul>
    
    {/*<ul>
        {
            users && users.length > 0 ?
            users.map((user) => {
                return <li className="mt-5 cursor-pointer">{user.id} - {user.firstName} {user.lastName}</li>
            }) : <p>No users found</p>
        }
    </ul>*/}
</div>;
}