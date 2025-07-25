import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [initial, setInitial] = useState({ todo: "", desc: "" })
  let [all, setAll] = useState([])

  function inp(e) {
    setInitial((prev) => {
      return ({ ...prev, [e.target.name]: e.target.value })
    })
  }

  function submit() {
    if (!initial.todo.trim() || !initial.desc.trim()) {
      return
    }
    setAll((p) => {
      return ([...p, initial])
    })
    addLocal([...all, initial])
    setInitial({ todo: "", desc: "" })
  }

  function addLocal(i) {
    localStorage.setItem("todos", JSON.stringify(i))
  }
  function getLocal() {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setAll(data)
  }

  useEffect(() => {
    getLocal();
  }, [])

  function prnt(arr) {
    console.log(arr);
  }

  function del(index) {
    let val = [...all]
    val.splice(index, 1)
    addLocal(val)
    getLocal()
    prnt(val)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f3e8ff] to-[#f0fdfa] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-10 md:p-14 space-y-12 relative overflow-hidden animate-fade-in-card">
        {/* Decorative gradient blob */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-200 opacity-30 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <h1 className="text-4xl md:text-5xl font-black text-center text-gray-900 tracking-tight mb-2 drop-shadow-lg z-10 relative">Todo App</h1>
        <p className="text-center text-gray-500 mb-8 text-lg z-10 relative">A beautifully crafted, modern todo experience.</p>
        {/* Floating label form */}
        <form className="space-y-8 z-10 relative" onSubmit={e => { e.preventDefault(); submit(); }}>
          <div className="relative">
            <input
              onChange={inp}
              type="text"
              name="todo"
              id="todo"
              placeholder="Your Todo"
              value={initial.todo}
              className="peer w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg bg-white/80 transition shadow-sm font-medium tracking-wide placeholder-gray-400"
              autoComplete="off"
              aria-label="Todo title"
            />
          </div>
          <div className="relative">
            <textarea
              onChange={inp}
              name="desc"
              id="desc"
              placeholder="Your Description"
              value={initial.desc}
              className="peer w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200 text-lg bg-white/80 transition shadow-sm font-medium tracking-wide resize-none min-h-[80px] placeholder-gray-400"
              autoComplete="off"
              aria-label="Todo description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-purple-500 active:scale-98 transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
            aria-label="Add Todo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Todo
          </button>
        </form>
        <div className="mt-10 z-10 relative">
          {all.length === 0 ? (
            <div className="text-center text-gray-400 py-12 text-lg animate-fade-in">No todos yet. Add your first task!</div>
          ) : (
            <ul className="flex flex-col gap-6">
              {all.map((item, i) => (
                <li
                  key={i + 1}
                  className="relative group bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl flex items-stretch overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-indigo-200 animate-fade-in-todo"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Vertical colored bar for numbering */}
                  <div className="flex flex-col items-center justify-center w-14 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-300 text-white font-bold text-xl select-none">
                    <span className="text-2xl font-black drop-shadow-sm">{i + 1}</span>
                  </div>
                  {/* Card content */}
                  <div className="flex-1 flex flex-col justify-center px-8 py-7">
                    <h2 className="font-extrabold text-2xl text-gray-900 mb-1 tracking-tight leading-tight group-hover:text-indigo-600 transition truncate">
                      {item.todo}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg break-words leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                  {/* Delete button, vertically centered on the right */}
                  <div className="flex items-center pr-6">
                    <button
                      onClick={() => del(i)}
                      className="p-3 rounded-full border border-gray-200 bg-white/80 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition focus:outline-none focus:ring-2 focus:ring-red-200 shadow-sm z-10"
                      aria-label={`Delete todo ${i + 1}`}
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Animations for fade-in */}
        <style>{`
          .animate-fade-in-card {
            opacity: 0;
            transform: translateY(40px);
            animation: fadeInCard 0.8s cubic-bezier(.4,1.4,.6,1) 0.1s forwards;
          }
          @keyframes fadeInCard {
            to {
              opacity: 1;
              transform: none;
            }
          }
          .animate-fade-in-todo {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInTodo 0.6s cubic-bezier(.4,1.4,.6,1) forwards;
          }
          @keyframes fadeInTodo {
            to {
              opacity: 1;
              transform: none;
            }
          }
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 0.7s cubic-bezier(.4,1.4,.6,1) forwards;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default App
