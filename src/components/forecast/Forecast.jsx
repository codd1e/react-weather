import React from 'react';
import classes from './Forecast.module.css'

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const WEEK_DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <label className={classes.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={classes.daily_item}>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className={classes.icon_small}/>
                                    <label className={classes.day}>{forecastDays[index]}</label>
                                    <label className={classes.description}>{item.weather[0].description}</label>
                                    <label className={classes.min_max}>{Math.floor(item.main.temp_min)}℃ {" "}/ {Math.floor(item.main.temp_max)}℃ </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={classes.daily_details_grid}>
                                <div className={classes.daily_details_grid_item}>
                                    <label>Давление</label>
                                    <label>{(item.main.pressure)*0.75} мм.рт.ст</label>
                                </div>
                                <div className={classes.daily_details_grid_item}>
                                    <label>Влажность</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className={classes.daily_details_grid_item}>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className={classes.daily_details_grid_item}>
                                    <label>Скорость ветра</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={classes.daily_details_grid_item}>
                                    <label>Высота над уровнем моря</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className={classes.daily_details_grid_item}>
                                    <label>Ощущается как</label>
                                    <label>{Math.floor(item.main.feels_like)}℃</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;