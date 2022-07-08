import { useRouter } from 'next/router'
import React from 'react'

function story({ img, username }) {
    const router = useRouter();
    return (
        <div className="" onClick={() => router.push("tes")}>
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src={img} alt="" />
            <p className="text-xl w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default story