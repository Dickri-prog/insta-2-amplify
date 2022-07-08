import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

function ProfilePerson({ id }) {
    const [follow, setFollow] = useState([]);

    // const q = query(collection(db, 'posts'), where("uid", "!=", `${id}`));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });


    useEffect(() => onSnapshot(query(collection(db, 'posts'), where("uid", "!=", `${id}`)), (snapshot) => setFollow(snapshot.docs)), [db]);

    // useEffect(() => onSnapshot(collection(db, 'posts', q, 'follow'), (snapshot) => setFollow(snapshot.docs)), [db]);

    // console.log(q)
    return (
        <div className="flex p-3">
            <p>0 Posts</p>
            {follow.length > 0 ? (
                <p>{follow.length} followers</p>
            ) : (
                <p>0</p>
            )}
            <p>0 Posts</p>
        </div>
    )
}

export default ProfilePerson