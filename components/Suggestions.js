import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import Suggestion from './Suggestion';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { useSession } from 'next-auth/react';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() =>
        onSnapshot(query(collection(db, 'posts')), (snapshot) => {
            setSuggestions(snapshot.docs);
            console.log(snapshot.docs);
        }), [db])

    return (
        <div>

            <div className="mt-4 ml-10">
                <div className="flex justify-between text-sm mb-5">
                    <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                    <button className="text-gray-600 font-semibold">See All</button>
                </div>

                {
                    suggestions.map((suggestion) => (
                        <Suggestion
                            key={suggestion.id}
                            id={suggestion.id}
                            username={suggestion.data().username}
                            userImg={suggestion.data().profileImg}
                        />
                    ))
                }

            </div>

        </div>
    )
}

export default Suggestions