'use client';

import { Input } from '@/shared/ui/input';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <h1>Главная страница</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px', marginTop: '20px' }}>
        
        {/* ===== ВХОД В АКК (тип 1 - outlined) ===== */}
        <Input type="outlined" placeholder="Email" />
        <Input type="outlined" placeholder="Пароль" />
        
        {/* ===== РЕГИСТРАЦИЯ (тип 2 - filled) ===== */}
        <Input type="filled" placeholder="Укажите email" />
        <Input type="filled" placeholder="Укажите пароль" inputType="password" errorText="Пароль должен быть не менее 8 символов" />
        
        {/* ===== ПРОФИЛЬ (тип 3 - labeled) ===== */}
        <Input type="labeled" label="Фамилия" placeholder="Введите фамилию" />
        <Input type="labeled" label="О себе" placeholder="Расскажите о себе" multiline={true} rows={4} />
        <Input type="labeled" label="Пароль" placeholder="Введите пароль" inputType="password" withPasswordToggle={true} />
        
      </div>
    </div>
  );
}