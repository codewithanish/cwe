import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { TerminalIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import supabase from "../supabase.config";

const Header: React.FC = () => {
  const { user } = useAuth();
  const [avatar, setAvatar] = useState("https://picsum.photos/200");

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setAvatar(data.avatar_url);
        console.log("success", data);
      }
    } catch (error: any) {
      alert(error.message + "from header");
    }
  }

  useEffect(() => {
    if (!user) {
      console.log("no user");
    } else getProfile();
  }, []);

  return (
    <header className="bg-cwe-black sticky z-50 top-0">
      <div className="p-4 flex items-center max-w-7xl mx-auto justify-between">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-gray-400 w-6 h-6 hover:text-white cursor-pointer sm:hidden" />
          <Link href="/">
            <div className="flex items-center space-x-3">
              <TerminalIcon className="text-cwe-green w-8 h-auto sm:w-9" />
              <h1 className="hidden md:block text-cwe-white font-bold">CWE</h1>
            </div>
          </Link>
        </div>
        <div className="hidden sm:block text-gray-400 text-[.9rem] space-x-4 flex-auto ml-8">
          <a className="bg-black p-2 rounded-md text-cwe-white" href="/">
            Home
          </a>
          <a className="hover:text-cwe-green" href="/">
            Courses
          </a>
          <a className="hover:text-cwe-green" href="/">
            Pricing
          </a>
          <a className="hover:text-cwe-green" href="/">
            About
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <BellIcon className="text-gray-400 w-6 h-6 hover:text-cwe-white" />
          <div className="w-7 h-7 relative rounded-full">
            {user ? (
              <Link href="/profile">
                <a>
                  <Image
                    src={avatar}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full absolute inset-0 cursor-pointer"
                  />
                </a>
              </Link>
            ) : (
              <Link href="/signIn">
                <a>
                  <Image
                    src="https://api.time.com/wp-content/uploads/2018/12/tim-cook-time100-2022.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full absolute inset-0 cursor-pointer"
                  />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
