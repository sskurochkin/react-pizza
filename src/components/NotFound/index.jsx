import React from 'react';
import styles from './style.module.scss'

export const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😞</span>
                <br/>
                    Ничего не найдено</h1>
            <p className={styles.descr}>К сожалению такой страницы не существует. <br/>Пожалуйми  ста, вернитесь на главную и сделайте заказ</p>
        </div>


    )
}
