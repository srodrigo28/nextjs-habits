import DayState from "@/components/DayState";
import Link from "next/link";

export default function Home() {
  const habits = {
    'beber água': {
      '2023-07-18': true,
      '2023-07-17': false,
      '2023-07-16': false
    },
    'javascript': {
      '2023-07-18': true,
      '20 23-07-17': false,
      '2023-07-16': true
    }
  };
  const today = new Date();
  const todayWeekDay = -1;
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1))
  return (
    <main className="flex flex-col items-center p-10 w-full">
      {Object.keys(habits).length === 0 && (
        <h1 className="mt-10 sm:text-4xl md:text-4xl text-white font-light">
          Você não tem hábitos cadastrados
        </h1>
      )}
      {habits !== null && Object.entries(habits).map(([habit, habitStreak]) =>(
        <div key={habit}>
          <div className=" w-96 sm:w-72 p-5 bg-green-600 flex justify-between items-center mt-5">
            <span className="text-2xl">{habit}</span>
            <button>X</button>
          </div>
          <section className="pl-7 grid grid-cols-7 bg-neutral-800 rounded-md p-2">
            {sortedWeekDays.map((day) =>(
              <div  key={day} className="flex flex-col last:font-bold last:text-red-500">
                  <span className="font-sans text-xs">{day}</span>
                  <DayState day={true} />
              </div>
            ))}
          </section>
        </div>
      ))}

      <Link className="bg-green-500 p-3 mt-6  bottom-10" href="/novo-habito">Novo hábito</Link>
    </main>
  );
}
