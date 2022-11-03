import classes from './current-weather.module.css'
import React from 'react';

const CurrentWeather = ({data}) => {

    return (
        <div className={classes.weather}>
            <div className={classes.top}>
                <div>
                    <p className={classes.city}>{data.city}</p>
                    <p className={classes.weather_description}>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className={classes.weather_icon}/>
            </div>
            <div className={classes.bottom}>
                <p className={classes.temperature}>{Math.round(data.main.temp)}℃</p>
                <div className={classes.details}>
                    <div className={classes.parameter_row}>
                        <span className={classes.parameter_label}>Детали</span>
                    </div>
                    <div className={classes.parameter_row}>
                        <span className={classes.parameter_label}>Ощущается как</span>
                        <span className={classes.parameter_value}>{Math.round(data.main.feels_like)}℃</span>
                    </div>
                    <div className={classes.parameter_row}>
                        <span className={classes.parameter_label}>Ветер</span>
                        <span className={classes.parameter_value}>{data.wind.speed} m/s</span>
                    </div>
                    <div className={classes.parameter_row}>
                        <span className={classes.parameter_label}>Влажность</span>
                        <span className={classes.parameter_value}>{data.main.humidity}%</span>
                    </div>
                    <div className={classes.parameter_row}>
                        <span className={classes.parameter_label}>Давление</span>
                        <span className={classes.parameter_value}>{(data.main.pressure)*0.75} мм.рт.ст</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;