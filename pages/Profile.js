import { useSession } from 'next-auth/react';
import Header from '../components/Header';
import ProfilePerson from '../components/ProfilePerson';

function Profile() {
    const { data: session } = useSession();

    return (
        <div>
            <Header />
            <div className="flex justify-center max-w-6xl mx-5 xl:mx-auto">
                <div className="">
                    <img src={session?.user?.image} className="w-auto h-70 rounded-full" alt="" />
                </div>
                <div>
                    <h2>{session?.user?.username}</h2>
                </div>
            </div>
            <ProfilePerson id={session?.user?.uid} />
        </div>
    )
}

export default Profile