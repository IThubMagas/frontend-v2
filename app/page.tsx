'use client';

import { Input } from '@/shared/ui/input';



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <h1>Главная страница</h1>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <Input type="outlined" placeholder="Введите e-mail" />
      
      <Input type="filled" placeholder="Повторите пароль" errorText="Пароли не совпадают" />
      
      <Input type="labeled" label="Фамилия" placeholder="Введите фамилию"  />
      
    </div>

    </div>
  );
}
