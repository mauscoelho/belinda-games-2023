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
    <div>
      <p className="">2023 NOBULL CROSSFIT GAMES</p>
      <h1 className="text-2xl">BELINDA BEKKER - GAMES SCHEDULE</h1>
    </div>
  );
}
