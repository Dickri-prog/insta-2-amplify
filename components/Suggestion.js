import faker from '@faker-js/faker';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

function Suggestion({ id, username, userImg }) {
    const { data: session } = useSession();
    const [suggestions, setSuggestions] = useState([]);
    const [followers, setFollow] = useState([]);
    const [hasFollow, setHasFollow] = useState(false);

    // useEffect(() => {
    //     const suggestions = [...Array(5)].map((_, i) => ({
    //         ...faker.helpers.contextualCard(),
    //         id: i,
    //     }));

    //     setSuggestions(suggestions)
    // }, []);

    useEffect(() =>
        setHasFollow(followers.findIndex((follow) => follow.id === id) !== -1), [followers]);

    useEffect(() =>
        onSnapshot(collection(db, 'posts', id, 'follow'), (snapshot) => setFollow(snapshot.docs)), [db, id]);

    const followUser = async (e) => {

        if (hasFollow) {
            await deleteDoc(doc(db, 'posts', id, 'follow', id));
        } else {
            await setDoc(doc(db, 'posts', id, 'follow', id), {
                username: username,
            })
        }
    }

    return (

        <div className="flex items-center justify-between mt-3">
            <img className="w-10 h-10 rounded-full border p-[2px]" src={userImg} alt="" />

            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{username}</h2>
                {/* <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3> */}
            </div>

            {hasFollow ? (
                <button onClick={followUser} className="text-dark-400">Followed</button>
            ) : (
                <button onClick={followUser} className="text-blue-400">Follow</button>
            )}

        </div>
    )
}

export default Suggestion