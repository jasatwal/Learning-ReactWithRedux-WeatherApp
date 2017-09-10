import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = [];
        const humidies = [];
        const pressures = [];

        cityData.list.map(weather => {
            temps.push(weather.main.temp);
            humidies.push(weather.main.humidity);
            pressures.push(weather.main.pressure);
        });

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} colour="orange" units="K" /></td>
                <td><Chart data={pressures} colour="green" units="hPa" /></td>
                <td><Chart data={humidies} colour="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
};

export default connect(mapStateToProps)(WeatherList);