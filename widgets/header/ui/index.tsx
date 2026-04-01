import Navigation from "./navigation"
export default function index() {
  return (
    <header className="flex justify-between align-center pt-16 pl-24 pr-24 pb-6">
      <h1 className="text-[#9747FF] font-bold text-4xl">
        <img src="/HRhub.svg" alt="HRhub logo" />
      </h1>
      <div className="flex gap-28">
       <Navigation/>
        {/* Вот на этой строке ты вставишь компонент кнопки входа */}
      </div>
    </header>
  )
}