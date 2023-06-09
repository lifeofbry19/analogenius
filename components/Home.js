import Image from "next/image";
import Link from "next/link";

export default function Home({ user }) {
  return (
    <div className="hero-content flex flex-col text-center max-w-7xl ">
      <div className="flex flex-col lg:flex-row border-b-2 border-gray-700 mb-10 pb-10">
        <div className="max-w-6xl flex justify-start flex-col items-start ">
          <div className="mb-10">
            <h1 className="text-5xl text-start font-bold ">
              Welcome to <span className="text-gradient">Analogenius!</span>{" "}
            </h1>
            <h3 className="text-2xl font-medium text-start text-gray-700">
              navigate to the{" "}
              <Link className="text-indigo-400" href="/learn">
                Learn
              </Link>{" "}
              tab to get started or read on to learn more about how to use the
              app!
            </h3>
          </div>

          <h2 className="mb-5 text-gray-600 text-lg md:text-xl text-start">
            <em>
              {" "}
              Analogenius is an AI-powered tool that teaches you difficult
              technical concepts with easy to understand analogies. Sometimes,
              ideas or concepts in tech are just difficult to grasp. You can use
              Analogenius to better supercharge your learning in 3 easy steps
            </em>
          </h2>

          <ul className="text-gray-300 hidden md:flex flex-col   gap-5 list-none text-lg pl-2 md:pl-0">
            <li className="text-start w-full  flex-1  bg-black -translate-x-1 translate-y-1 ">
              <div className=" flex gap-5 bg-gray-200 border-gray-600 border-2 flex-col p-2 h-full w-full translate-x-2 -translate-y-2 ">
                <h3 className="font-medium text-5xl text-emerald-500">1 </h3>
                <p className="text-gray-600 text-xl">
                  on the{" "}
                  <Link className="text-indigo-400" href="/learn">
                    Learn
                  </Link>{" "}
                  tab, input a topic you want to better understand in the
                  concept text box: the more specific the better!
                </p>
                <div className="flex flex-col lg:flex-row">
                  <Image
                    src="/step-1.png"
                    className="object-contain border-indigo-400 border-2"
                    width={700}
                    height={300}
                    alt="demo of input box on learn page"
                  />
                </div>
              </div>
            </li>
            <li className="text-start w-full flex-1  bg-black -translate-x-1 translate-y-1 ease-in-out duration-75 ">
              <div className="bg-gray-200 p-2 border-gray-600 border-2 flex flex-col  gap-5 h-full w-full text-black translate-x-2 -translate-y-2 ease-in-out duration-75">
                <h3 className="font-medium text-5xl text-emerald-500">2</h3>
                <p className="text-gray-600 text-xl">
                  then pick something you are familiar with to be used as an
                  analogy: could be a TV Show, a sport, or something entirely
                  different
                </p>
                <div className="flex gap-2 flex-col lg:flex-row">
                  <Image
                    src="/step-2.png"
                    className="object-contain border-indigo-400 border-2"
                    width={700}
                    height={300}
                    alt="demo of categories and analogy selection on learn page"
                  />
                </div>
              </div>
            </li>
            <li className="text-start   w-full flex-1   bg-black -translate-x-1 translate-y-1 ">
              <div className="bg-gray-200 p-2 h-full  border-2 border-gray-600  w-full flex flex-col gap-5 text-black translate-x-2 -translate-y-2 ">
                <h3 className="font-medium text-5xl text-emerald-500">3 </h3>
                <p className="text-gray-600 text-xl">
                  finally, soak in the knowledge as the power of AI is harnessed
                  to help you better understand complex ideas with simple
                  analogies
                </p>
                <div className="flex flex-col lg:flex-row gap-2">
                  <Image
                    src="/airesponse.png"
                    className="object-contain border-indigo-400 border-2"
                    width={700}
                    height={300}
                    alt="demo of AI response to user query"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-2xl ">
        <h3 className="text-2xl font-bold mb-5">
          Get started leraning new things now! Or navigate to the{" "}
          <Link href="/search" className="text-indigo-400">
            Search
          </Link>{" "}
          tab to see a list of past queries made by other users.
        </h3>
        <Link
          className="h-8 mb-5 lg:h-10 font-medium text-lg flex justify-center items-center text-white hover:bg-indigo-400 bg-indigo-500 "
          href="/learn"
        >
          Give it a try!
        </Link>
      </div>
    </div>
  );
}
