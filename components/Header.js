import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from "@heroicons/react/outline";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom"
import { Popover } from "@headlessui/react";


function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();



    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div onClick={() => router.push("/")} className="relative lg:hidden w-10 cursor-pointer flex-shrink-0">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push("/")} className=" navBtn h-7 w-7" />
                    <MenuIcon className="h-7 w-7 cursor-pointer md:hidden" />
                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className=" navBtn h-7 w-10 rotate-45" />
                                <div className="absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">4</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className=" navBtn h-7 w-10" />
                            <UserGroupIcon className=" navBtn h-7 w-10" />
                            <HeartIcon className=" navBtn h-7 w-10" />



                            <Popover className="relative">
                                <Popover.Button><img
                                    src={session?.user?.image}
                                    className="h-10 rounded-full cursor-pointer"
                                /></Popover.Button>

                                <Popover.Panel className="absolute z-10 h-40 -ml-8 ">
                                    <div className="flex flex-col -ml-6 text-base w-fit  bg-gray-100 items-center pt-2 pr-6 pl-6 pb-6">
                                        <a className="hover:text-blue-400 cursor-pointer" onClick={() => router.push("Profile")}>Profile</a>
                                    </div>

                                    {/* <img src={session?.user?.image} alt="" /> */}
                                </Popover.Panel>
                            </Popover>
                        </>


                    ) : (
                        <button onClick={signIn}>Sign in</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
