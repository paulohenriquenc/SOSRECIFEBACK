import React, { useState, useEffect } from 'react';

const API_KEY = 'e2ac54cf931b53cbbc7eb82c21940ade';
const CITY_ID = '3407758'; 

function Time() {
    const [previsao, setPrevisao] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&lang=pt_br&units=metric`)
            .then(response => response.json())
            .then(data => {
                setPrevisao(data);
                setIsLoading(false);
            })
            .catch(error => console.error('Erro ao buscar previsão do tempo:', error));
    }, []);

    if (isLoading) {
        return (
            <div className="container">
                <div className="loader"></div>
            </div>
        );
    }

    if (!previsao || !previsao.main) {
        return (
            <div className="container">
                <p className="error">Erro ao carregar previsão do tempo</p>
            </div>
        );
    }

    const temperaturaAtual = previsao.main.temp;
    const descricao = previsao.weather[0].description;
    const umidade = previsao.main.humidity;
    const velocidadeVento = previsao.wind.speed;

    return (
        <div className="container">
            <img
                src={process.env.PUBLIC_URL + '../src/routes/assets/SOS REC LOGO.png'}
                alt="Logo"
                className="logo"
            />
            <h1 className="titulo">Previsão do Tempo para Recife</h1>
            <div className="card">
                <p className="texto">Temperatura: {temperaturaAtual}°C</p>
                <p className="texto">Descrição: {descricao}</p>
                <p className="texto">Umidade: {umidade}%</p>
                <p className="texto">Velocidade do vento: {velocidadeVento} m/s</p>
            </div>
        </div>
    );
}



export default Time;
