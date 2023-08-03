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
    <div className="p-6 grid gap-8 justify-center text-center">
      <div className="grid">
        <p className="">2023 NOBULL CROSSFIT GAMES</p>
        <p className="text-2xl">BELINDA BEKKER</p>
        <p className="">GAMES SCHEDULE</p>
      </div>
      <div className="grid">
        <p className="text-sm">Central European Summer Time</p>
        <p className="text-sm">Time zone in Rijswijk (GMT+2)</p>
      </div>
      <div className="grid gap-4">
        <div className="grid">
          <p className="text-sm text-gray-500">DAY 3 FINAL</p>
          <p className="text-sm text-gray-500">
            Thursday 19:40 until Friday 1:40
          </p>
          <a
            className="text-blue-500"
            href="https://www.instagram.com/pieneee/"
          >
            Instagram Live at heat time
          </a>
        </div>
        <div className=" grid">
          <p className="">Workout 7 - Endure the Coliseum</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">19:40 - 20:02</p>
        </div>
        <div className=" grid">
          <p className="">Workout 8 - Final</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">01:30 - 01:40</p>
        </div>
      </div>

      <a
        href="https://bunq.me/mauscoelho"
        className="flex flex-1 justify-center"
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
