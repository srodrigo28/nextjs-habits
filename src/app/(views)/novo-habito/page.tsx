import Link from "next/link";

function NewHabit(){
    return(
        <div className="container relative flex flex-col gap-8 px-12 pt-16">
            <h1 className="text-3xl font-light text-center text-white">Novo hábito</h1>

            <form className="flex flex-col gap-4 mt-4">
                <input 
                    type="text" 
                    id="habit" 
                    placeholder="habit" 
                    className="border-none bg-neutral-800 outline-none rounded-xl p-2" 
                />

                <button className="bg-green-600 p-3 mt-6 bottom-10 rounded-xl">
                    Cadastrar
                </button>
                
                <Link className="bg-red-600 p-3 rounded-xl mt-6  bottom-10 text-center" href="/">
                    Cancelar
                </Link>
            </form>
        </div>
    )
}

export default NewHabit;