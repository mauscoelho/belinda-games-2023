import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Belinda Bekker - Crossfit Games 2023" },
    {
      name: "description",
      content: "Belinda Bekker schedule for Crossfit Games 2023",
    },
  ];
};

export default function Index() {
  return (
    <div className="p-6 grid justify-center text-center">
      <p className="">2023 NOBULL CROSSFIT GAMES</p>
      <p className="text-2xl">BELINDA BEKKER</p>
      <p className="">GAMES SCHEDULE</p>
      <p className="text-sm mt-8">Central European Summer Time</p>
      <p className="text-sm">Time zone in Rijswijk (GMT+2)</p>
      <div className="grid gap-4 mt-6">
        <div className="grid">
          <p className="text-sm text-gray-500">DAY 1</p>
          <p className="text-sm text-gray-500">
            Tuesday 21:00 until Wednesday 1:20
          </p>
        </div>
        <div className=" grid">
          <p className="">Workout 1 - Olympic Total</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">21:00 - 21:30</p>
          <a
            className="text-blue-500"
            href="https://www.youtube.com/watch?v=Kk3511en1uw"
          >
            Watch on Youtube
          </a>
        </div>
        <div className=" grid">
          <p className="">Workout 2 - Farmers Field</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">21:00 - 21:30</p>
        </div>
        <div className=" grid">
          <p className="">Workout 3 - Helen</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">1:05 - 1:19</p>
        </div>
      </div>

      <a
        href="https://bunq.me/mauscoelho"
        className="flex flex-1 mt-20 justify-center"
        target="_blank"
        rel="noreferrer"
      >
        <span className="px-3 py-1.5 text-xs hover:bg-slate-400 text-slate-800 bg-slate-100 rounded">
          🏋️‍♂️ Buy me a FitAid
        </span>
      </a>
    </div>
  );
}
