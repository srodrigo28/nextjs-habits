export default function Home() {
  const habits = {
    'beber água': {
      '2023-07-18': true,
      '2023-07-17': false,
      '2023-07-16': false
    },
    'javascript': {
      '2023-07-18': true,
      '2023-07-17': false,
      '2023-07-16': true
    }
  };
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  return (
    <main className="flex flex-col items-end p-20 w-full">
      {Object.keys(habits).length === 0 && (
        <h1 className="mt-20 sm:text-4xl md:text-4xl text-white font-light">
          Você não tem hábitos cadastrados
        </h1>
      )}
      {habits !== null && Object.entries(habits).map(([habit, habitStreak]) =>(
        <div key={habit}>
          <div className=" w-96 p-10 bg-neutral-700 flex justify-between items-center mt-5">
            <span className="text-2xl">{habit}</span>
            <button>X</button>
          </div>
          <section className="pl-7 grid grid-cols-7 bg-neutral-800 rounded-md p-2">
            {weekDays.map((day) =>(
              <div  key={day} className="flex flex-col">
                  <span className="font-sans text-xs">{day}</span>
              </div>
            ))}
          </section>
        </div>
      ))}
    </main>
  );
}
