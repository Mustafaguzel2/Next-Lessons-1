import { redirect } from "next/navigation";
export default function Account() {
    //assume that profile info is null

    const userProfileInfo = null;
    if(userProfileInfo === null) redirect ('/cart?search=product1');
    return <div>Account</div>;
}