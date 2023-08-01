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
      <p>2023 NOBULL CROSSFIT GAMES</p>
      <h1>BELINDA BEKKER - GAMES SCHEDULE</h1>
    </div>
  );
}
