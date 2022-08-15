import { AcademicCapIcon } from "@heroicons/react/outline";
import { ArrowRightIcon, CodeIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import supabase from "../supabase.config";
// import PricingOption from "../components/PricingOption";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Code With Ease</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="w-full bg-gradient-to-r from-[#00BFA6] to-[#11998e] h-[50vh] flex justify-center items-center flex-col space-y-7">
          <div className="flex flex-col items-center">
            <h1 className="text-teal-100 font-bold text-[2.8rem] sm:text-5xl md:text-[3.2rem] lg:text-7xl">
              Code with Ease
            </h1>
            <h2 className="text-teal-100/80 font-bold text-4xl sm:text-[2.45rem] md:text-[2.65rem] lg:text-6xl">
              Learn to Code
            </h2>
            <p className="text-center text-teal-100/60 mt-5 max-w-xs lg:text-lg">
              Learn to code in popular and on-demand languages all for just
              40.99/yr.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 text-lg">
            <button className="px-14 py-2 rounded-lg bg-teal-100 text-cwe-green">
              Get Started
            </button>
            <button
              className="px-14 py-2 rounded-lg bg-[#0d6c64]  bg-opacity-60 text-teal-100"
              onClick={() => window.location.replace("/#pricing")}
            >
              View Pricing
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center items-center w-full mt-10">
          <div className="flex flex-col m-3 mb-6 p-2 space-y-6">
            <CodeIcon className="w-9 rounded-lg p-1 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white" />
            <h2 className="font-bold text-3xl sm:text-4xl text-slate-800 text-left max-w-sm">
              Learn to Code on the Go
            </h2>
            <p className="text-cwe-grey max-w-sm text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              eligendi odio laborum magni consequatur repellendus.
            </p>
            <button className="px-2 py-2 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white font-semibold rounded-lg w-44">
              Download the App
            </button>
            <hr />
          </div>
          <div className="relative w-80 h-80">
            <Image
              src="/iPad Pro (12.9 Inch) Mockup.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-center items-center w-full my-10 mb-20">
          <div className="relative border border-gray-300 w-96 h-52 rounded-lg sm:mr-4 shadow-lg">
            <Image src="/Frame 6.svg" layout="fill" objectFit="contain" />
          </div>
          <div className="flex flex-col m-3 mb-6 p-2 space-y-6">
            <AcademicCapIcon className="w-9 rounded-lg p-1 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white" />
            <h2 className="font-bold text-3xl sm:text-4xl text-slate-800 text-left max-w-sm md:max-w-md">
              Get Access 100s of on-demand Courses
            </h2>
            <p className="text-cwe-grey max-w-sm text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              eligendi odio laborum magni consequatur repellendus.
            </p>
            <button className="px-2 py-2 bg-gradient-to-r from-[#00BFA6] to-[#15a99d] text-cwe-white font-semibold rounded-lg w-40 flex items-center justify-center">
              View Courses
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
            <hr />
          </div>
        </div>

        <div className="flex flex-col items-center mb-16">
          <div className="mb-10">
            <h1 className="font-bold text-5xl text-slate-800 text-center">
              Pricing Plans
            </h1>
            <h2 className="font-light text-xl mt-3 max-w-sm sm:max-w-none text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              voluptatem!
            </h2>
          </div>
          {/* <div
            className="lg:flex lg:space-x-4 space-y-3 items-center"
            id="pricing"
          >
            <PricingOption
              length="Monthly"
              description="A basic monthly subscription"
              price="5.99"
              features={[
                "Access to all courses",
                "Access to all challenges",
                "Access to 3 completed full-stack projects",
              ]}
            />
            <PricingOption
              length="Yearly"
              description="A full yearly package"
              price="40.99"
              features={[
                "Access to all courses",
                "Access to all challenges",
                "Access to 5 completed full-stack projects",
                "Access to a student discord",
                "Free 101 coaching sessions*",
              ]}
              important={true}
            />
            <PricingOption
              length="Yearly"
              description="A baseline yearly package"
              price="25.99"
              features={[
                "Access to all courses",
                "Access to all challenges",
                "Access to 4 completed full-stack projects",
                "Access to a student discord",
              ]}
            />
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
