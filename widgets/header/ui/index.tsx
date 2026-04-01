export default function index() {
  return (
    <header className="flex justify-between align-center pt-16 pl-24 pr-24 pb-6">
      <h1 className="text-[#9747FF] font-bold text-4xl">
        <img src="/HRhub.svg" alt="HRhub logo" />
      </h1>
      <div className="flex">
        <nav className="flex items-center gap-7">
          <a className="font-medium text-[16px] hover:text-[#9747FF]" href="">Главная</a>
          <a className="font-medium text-[16px] hover:text-[#9747FF]" href="">Специалисты</a>
          <a className="font-medium text-[16px] hover:text-[#9747FF]" href="">О нас</a>
        </nav>
        {/* Вот на этой строке ты поставишь кнопку входа */}
      </div>
    </header>
  )
}