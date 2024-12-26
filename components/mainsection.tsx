import Link from "next/link";
import Carousel from "./carousel";

const slides = [
  "/assets/food/1.jpeg",
  "/assets/food/2.jpeg",
  "/assets/food/3.jpeg",
  "/assets/food/4.jpeg",
  "/assets/food/5.jpeg",
  "/assets/food/6.jpeg",
  "/assets/food/7.jpeg",
];

const mainsection = () => {
  return (
    <div className=" w-full  relative flex flex-row justify-around items-center">
      <div className="  w-[50%] h-screen flex flex-col px-20">
        <div className="pt-32 w-[600px] text-wrap">
          <b className="text-[78px]  tracking-[0.01em] leading-[120%] ">
            Don't wanna Make you Have A Bad day
          </b>
        </div>
        <div className="tracking-[0.01em] leading-[130%] text-[22px] w-[600px] text-wrap pt-6 text-[#797979]">
          Our job is delivering a delicious food with fast , free delivery and
          easy.
        </div>
        <div className=" flex flex-row gap-20 mt-4">
          <button className="w-[100px] p-2 rounded-3xl text-white bg-[#f39945]">
            Menu
          </button>
          <div className="p-2 px-4 rounded-3xl text-[#EC994B] border-[#f39945] border  hover:bg-[#EC994B]  hover:text-white">

            <button className="flex flex-row gap-2 hover:text-white">
              <svg
                className="w-6 h-6 text-[#f39945] hover:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
              Google map
            </button>
          </div>
        </div>
        <div className="flex flex-row p-8 gap-10">
          <Link href="/">
            <svg
              className="w-8 h-8 text-[#EA6D27]  hover:text-[#2761b8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              className="w-8 h-8 text-[#EA6D27]  hover:text-[#cd2f8b] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              className="w-8 h-8 text-[#EA6D27]  hover:text-[#2b6be3]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="w-[400px] rounded-tl-3xl rounded-br-3xl rounded-md overflow-hidden object-cover " style={{ boxShadow: "-2px -4px 5px rgba(0, 0, 0, 0.5)" }}>
        <Carousel>
          {slides.map((s) => (
            <img src={s}
              className="object-cover" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default mainsection;
