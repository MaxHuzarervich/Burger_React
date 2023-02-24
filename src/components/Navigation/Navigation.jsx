import style from './Navigation.module.css'
import React, {useEffect} from "react";
import {Container} from '../Container/Container.jsx'
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {categoryRequestAsync, changeCategory} from "../../store/category/categorySlice";
import {API_URI} from "../../const";


export const Navigation = () => {
    const {category, activeCategory} = useSelector((state) => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryRequestAsync('max'))
    }, [])

    return (
        <nav className={style.navigation}>
            <Container className={style.container}>
                <ul className={style.list}>
                    {category.map((item, index) =>
                        <li key={index} className={style.item}>
                            <button
                                className={classNames(
                                    style.button,
                                    activeCategory === index ? style.button_active : '')}
                                style={{backgroundImage: `url(${API_URI}/${item.image})`}}
                                onClick={() => {
                                    dispatch(changeCategory({indexCategory: index}))
                                }}
                            >
                                {item.rus}
                            </button>
                        </li>
                    )}
                </ul>
            </Container>
        </nav>
    )
}