'use client';
import CustomButton from '@/shared/ui/button';
import Navigation from './navigation';

export default function index() {
  return (
    <header className="flex justify-between align-center pt-16 pl-24 pr-24 pb-6">
      <h1 className="text-[#9747FF] font-bold text-4xl">
        <img src="/HRhub.svg" alt="HRhub logo" />
      </h1>
      <div className="flex gap-28">
        <Navigation />
        <CustomButton
          variant="outlined"
          width={121}
          height={40}
          textColor="#9747FF"
          borderColor="#9747FF"
          onClick={() => {
            alert(123);
          }}
        >
          Вход
        </CustomButton>
      </div>
    </header>
  );
}
