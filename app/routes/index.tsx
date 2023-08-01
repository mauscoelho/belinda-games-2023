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
    <div className="p-6 grid text-center">
      <p className="">2023 NOBULL CROSSFIT GAMES</p>
      <p className="text-2xl">BELINDA BEKKER</p>
      <p className="">GAMES SCHEDULE</p>
      <div className="grid gap-4 mt-6">
        <p className="text-sm text-gray-500">DAY 1</p>
        <div className=" grid">
          <p className="">Workout 1 - Olympic Total</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">9:00 PM - 9:30 PM</p>
        </div>
        <div className=" grid">
          <p className="">Workout 2 - Farmers Field</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">9:00 PM - 9:30 PM</p>
        </div>
        <div className=" grid">
          <p className="">Workout 3 - Helen</p>
          <p className="">Heat 1 - Women (35-39)</p>
          <p className="text-xl font-bold">1:05 AM - 1:19 AM</p>
        </div>
      </div>
    </div>
  );
}
