import { CloudUploadIcon, UploadIcon } from "@heroicons/react/solid";
import { User } from "@supabase/supabase-js";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import supabase from "../supabase.config";

type Props = {
  user: User;
};

const profile: NextPage<Props> = ({ user }: Props) => {
  const [username, setUsername] = useState("");

  if (!user) {
    return <div>You are not logged in</div>;
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    error && console.log(error);
  };

  useEffect(() => {
    async function getProfile() {
      try {
        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username`)
          .eq("id", user?.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setUsername(data.username);
          console.log("success", data);
        }
      } catch (error) {
        alert(error.message + "from getProfile");
      }
    }

    getProfile();
  }, []);

  async function updateProfile() {
    try {
      const updates = {
        id: user?.id,
        username,
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="w-full h-full">
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-[#00BFA6] to-[#11998e] h-[25vh] flex flex-col items-center justify-center">
        <h1 className="text-teal-100 font-semibold text-4xl">My Profile</h1>
      </div>
      {/* User info */}
      <div className="rounded-xl shadow w-[30rem] p-6 m-4 flex flex-col mx-auto">
        <form className="space-y-6">
          <div className="flex flex-col space-y-2 w-full items-center">
            <label className="text-gray-800 text-xl font-bold">Avatar</label>
            <div className="group">
              <div className="hidden group-hover:flex items-center justify-center absolute z-50">
                <label className="w-44 h-44 flex flex-col items-center justify-center px-4 py-6 tracking-wide uppercase cursor-pointer hover:bg-blue rounded-full text-teal-100 bg-slate-900 bg-opacity-75">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    Select a file
                  </span>
                  <input
                    type="file"
                    accept="image/png image/jpeg image/webp"
                    className="hidden"
                  />
                </label>
              </div>
              <img
                src="https://picsum.photos/200"
                className="rounded-full w-44"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-800">Username</label>
            <input
              type="text"
              placeholder="Royal Odd Sophisticated Chicken"
              className="rounded-lg border-2 border-gray-400 focus:outline-none p-2 shadow-sm ring-0 ring-cwe-green focus:ring outline-none focus:border-0 w-11/12 mx-auto"
              minLength={4}
              maxLength={20}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <button
            className="px-2 py-2 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white font-semibold rounded-lg w-11/12 mx-auto flex items-center justify-center"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              updateProfile();
            }}
          >
            <UploadIcon className="w-5 h-5 text-teal-100 mr-1" />
            Update Profile
          </button>
        </form>

        {/* divider */}
        <hr className="border-t border-gray-400 w-10/12 mx-auto my-10" />

        <button
          className="px-2 py-2 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white font-semibold rounded-lg w-11/12 mx-auto flex items-center justify-center"
          type="submit"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default profile;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    console.log("Please login.");
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  return { props: { user } };
}
