export default function Header({logout}) {
    return (
      <header className="flex justify-between w-full bg-green-400">
        <h3 className="pt-4 pb-3 font-semibold text-indigo-900 text-black-100 md:text-3xl "> Cookie Stand Admin</h3>
        <div>
        <button className="items-center justify-center w-24 h-8 m-3 bg-gray-200 rounded btn btn-primary ">Overview</button>
        <button onClick={()=>logout()} className="items-center justify-center w-24 h-8 m-3 bg-red-400 rounded btn btn-danger " >Logout</button>
        </div>
      </header>
    )
  }

  