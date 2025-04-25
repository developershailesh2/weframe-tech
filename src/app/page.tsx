// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { GoGear } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="">
        <aside className="w-70 bg-[rgba(17,69,93,1)] h-full  fixed">
          <div className="p-5">
            <ul className=" text-start text-gray-300 mt-10">
              <li className="bg-[rgba(255,255,255,0.1)] text-[rgba(47,188,254,1)] p-2 rounded mb-4">
                Home
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                Stages & Checklist
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                Preferred Vendors
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                Tech Stack
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                Targets
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                Zee Sales Targets
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                MAI Settings
              </li>

              <li className="hover:bg-[rgba(243,241,241,0.89)] hover:text-gray-700 p-2 rounded mb-4">
                Pending Questions{" "}
                <span className="ml-15 text-[rgba(52,64,84,1)] bg-[rgba(234,236,240,1)] rounded-lg p-1 font-semibold">
                  3
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-25  text-gray-400 p-8">Logout</div>
        </aside>
      </div>

      {/* main area */}
      <div className="ml-[280px] flex-1">
        <header className="bg-white border-b-2 shadow-md flex items-end justify-end text-white w-full p-4 text-base">
          <div>
            <GoGear className=" text-black text-2xl text-center mb-2" />
          </div>
          <div>
            <Image
              className="rounded-full ml-10 mr-10"
              src={"/images/avatar.png"}
              height={40}
              width={40}
              alt="image"
            ></Image>
          </div>
        </header>
        {/* main area */}
        <main className="flex justify-center bg-white border-b-1 px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full ">
            {/* Box 1: Account Progress */}
            <div className="shadow-md bg-white border border-gray-200 p-6 rounded-lg">
              <h1 className="font-semibold text-lg text-center mb-6">
                Account Progress
              </h1>

              <div className="flex justify-center mb-6">
                <Image
                  src={"/images/Progress circle.png"}
                  height={148}
                  width={148}
                  alt="progress"
                />
              </div>

              <hr />

              <div className="mt-6 bg-[rgba(246,247,251,1)] p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Steps Completed</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between text-[rgba(69,84,104,1)]">
                    Profile Setup <FaCheckCircle className="text-green-700" />
                  </li>
                  <li className="flex justify-between text-[rgba(69,84,104,1)]">
                    Initial Training{" "}
                    <FaCheckCircle className="text-green-700" />
                  </li>
                  <li className="flex justify-between text-[rgba(69,84,104,1)]">
                    Legal Documents <FaCheckCircle className="text-green-700" />
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-[rgba(246,247,251,1)] p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Steps Remaining</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between text-[rgba(69,84,104,1)]">
                    Financial Integration{" "}
                    <FaCheckCircle className="text-green-200" />
                  </li>
                  <li className="flex justify-between text-[rgba(69,84,104,1)]">
                    Final Review <FaCheckCircle className="text-green-200" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
              {/* Card 1: Total Franchisees Onboard */}
              <div className="bg-white shadow-md border border-gray-200 p-8 rounded-lg">
                <h1 className="font-semibold text-lg mb-4">
                  Total Franchisees Onboard
                </h1>
                <div className="flex items-center justify-between flex-wrap gap-4 mt-8">
                  <h1 className="font-bold text-4xl">14</h1>
                  <p className="font-semibold border border-green-800 px-2 py-1 rounded-lg text-green-800 flex items-center gap-2">
                    <FaArrowTrendUp className="text-green-800" />
                    7.4%
                  </p>
                  <Image
                    className="mt-1"
                    alt="avatar-group"
                    src={"/images/Avatar group.png"}
                    height={24}
                    width={124}
                  />
                </div>
                <div className="flex gap-2 mt-8 mb-4">
                  <div className="flex-1 h-3 rounded-full bg-[#1E81B0]"></div>
                  <div className="flex-1 h-3 rounded-full bg-[#33CFFF]"></div>
                  <div className="flex-1 h-3 rounded-full bg-[#A9E5FF]"></div>
                </div>
                <ul className="mt-4 text-gray-600">
                  <li className="flex justify-between mb-3">
                    <span>Stage 1 (Initial Inquiry)</span>
                    <span className="font-semibold text-2xl">02</span>
                  </li>
                  <li className="flex justify-between mb-3">
                    <span>Stage 2 (Document Submission)</span>
                    <span className="font-semibold text-2xl">07</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stage 3 (Training)</span>
                    <span className="font-semibold text-2xl">05</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Key Insights & Feedback */}
              <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg">
                <h2 className="font-bold text-lg">Key Insights & Feedback</h2>
                <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-4xl">10%</p>
                    <span className="text-sm text-gray-600 font-semibold">
                      Sales Growth
                    </span>
                  </div>
                  <div className="text-sm font-medium text-blue-400 bg-blue-100 px-4 py-2 rounded-lg">
                    Top Performer
                  </div>
                </div>
                <hr className="mb-5 mt-3" />
                <div className="bg-gray-100 rounded-lg">
                  <p className="font-semibold ms-4 pt-4 text-lg">Feedback</p>
                  <p className="text-start ps-3 pb-3 pt-3">
                    Franchisees are requesting more detailed training materials.
                  </p>
                </div>
              </div>

              {/* Card 3: Financial Wellbeing */}
              <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg">
                <p className="text-lg font-semibold">Financial Wellbeing</p>
                <div className="flex items-center justify-between mt-5">
                  <p className="text-3xl font-bold">
                    20 <br />
                    <span className="text-sm text-gray-400 font-normal">
                      Total Franchisees
                    </span>
                  </p>
                  <p className="font-semibold border border-green-800 px-2 rounded-lg text-green-800 flex items-center gap-2">
                    <FaArrowTrendUp className="text-green-800" />
                    2.1%
                  </p>
                </div>
                <hr className="mt-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <p className="text-gray-500">Target</p>
                    <p className="text-2xl font-semibold mt-3">$500,000</p>
                  </div>
                  <div className="bg-gray-100 p-4 text-center rounded-lg">
                    <p className="text-gray-500">Current</p>
                    <p className="text-2xl font-semibold mt-3">$450,000</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Prospect Leads */}
              <div className="bg-white shadow-md border border-gray-200 p-4 rounded-lg">
                <h1 className="font-semibold text-lg mb-4">Prospect Leads</h1>

                {/* Lead 1 */}
                <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg mb-3 flex-wrap sm:flex-nowrap">
                  <Image
                    src={"/images/avatar33.png"}
                    alt="avatar"
                    height={36}
                    width={36}
                    className="rounded-full"
                  />
                  <div className="text-md font-semibold">
                    Wade Warren
                    <span className="text-sm text-gray-400 ml-4">
                      Stage:{" "}
                      <span className="text-black font-semibold">
                        Initial Inquiry
                      </span>
                    </span>
                  </div>
                </div>

                {/* Lead 2 */}
                <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg mb-3 flex-wrap sm:flex-nowrap">
                  <Image
                    src={"/images/avatar11.png"}
                    alt="avatar"
                    height={36}
                    width={36}
                    className="rounded-full"
                  />
                  <div className="text-md font-semibold">
                    Ava Wright
                    <span className="text-sm text-gray-400 ml-4">
                      Stage:{" "}
                      <span className="text-black font-semibold">
                        Initial Inquiry
                      </span>
                    </span>
                  </div>
                </div>

                {/* Lead 3 */}
                <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg mb-1 flex-wrap sm:flex-nowrap">
                  <Image
                    src={"/images/avatar22.png"}
                    alt="avatar"
                    height={36}
                    width={36}
                    className="rounded-full"
                  />
                  <div className="text-md font-semibold">
                    Cody Fisher
                    <span className="text-sm text-gray-400 ml-4">
                      Stage:{" "}
                      <span className="text-black font-semibold">
                        Initial Inquiry
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="flex flex-col md:flex-row bg-gray-50">
          {/* Left Side - Pending Questions */}
          <div className="w-full md:w-1/3 bg-white border-r p-6">
            <div className="flex items-center justify-between mb-6 border-b-1 p-2 ">
              <h2 className="text-2xl font-semibold ">Pending Questions</h2>
              <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded-lg">
                02
              </span>
            </div>

            {/* Single Question Card */}
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <img
                    src="/images/Avataronline.png"
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Phoenix Baker{" "}
                      <span className="text-gray-500 text-xs">
                        {" "}
                        <br /> @phoenix
                      </span>
                    </h4>
                    <p className="text-sm text-gray-700 mt-2">
                      What are the requirements for opening a new store?
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">5min ago</span>
              </div>
              <hr className="mt-4" />
            </div>

            {/* Another Question Card */}
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <img
                    src="/images/Avataronline2.png"
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Koray Okumus{" "}
                      <span className="text-gray-500 text-xs">@koray</span>
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      How do I manage inventory effectively?
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">4hr ago</span>
              </div>
            </div>
          </div>

          {/* Right Side - Chat Area */}

          <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-8 py-12 text-center">
            <img src="/images/Logo.png" alt="logo" className="w-12 mb-6" />
            <h1 className="text-3xl font-semibold mb-7">
              Welcome to the AI Chat Assistant
            </h1>

            {/* Input with icon inside */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ask your question here.."
                className="w-full border rounded-md p-3 focus:outline-none bg-white"
              />
              <IoSendSharp className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
