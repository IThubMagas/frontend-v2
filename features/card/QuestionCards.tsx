'use client';
import React from 'react'

export default function questionCards() {
  return (
    <div className="flex justify-between w-full border rounded-[10px] border-(--color-primary)/20 py-3 px-5">
        <div>
            <h3>Расскажи о себе</h3>
            <p className='text-(--color-primary)'>Python Developer | Тест 5+ вопросов</p>
        </div>
        <div className='flex items-center gap-2'>
            <button>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9.5L1 18" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  )
}
