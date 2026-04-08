import React from 'react'

export default function CreateRequest() {
  return (
    <div>
        <h1>Создать заявку</h1>

        <div>
            <p>Название компании</p>
            <input type="text" placeholder='Введите название заявки' />
        </div>

        <div>
            <p>Какой it-специалист требуется</p>
            <input type="text" placeholder=''/>
        </div>

        <div>
            <p>Описание</p>
            <textarea placeholder='Опишите задачи, уровень специалиста и желаемый результат'></textarea>
        </div>
    </div>
  )
}
