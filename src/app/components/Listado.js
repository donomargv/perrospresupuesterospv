// src/app/components/Listado.js
"use client"; // Asegúrate de que esta línea esté al inicio

import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({ gastos }) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.length > 0 ? (
            gastos.map(gasto => (
                <Gasto 
                    key={gasto.id} // Asegúrate de que cada gasto tenga un ID único
                    gasto={gasto}
                />
            ))
        ) : (
            <p>No hay gastos registrados.</p> // Mensaje alternativo si no hay gastos
        )}
    </div>
);

Listado.propTypes = {
    gastos: PropTypes.arrayOf( // Cambiado a 'arrayOf' para mayor precisión
        PropTypes.shape({ // Definimos la estructura de cada gasto
            id: PropTypes.string.isRequired, // Asegúrate de que el ID sea string o número según corresponda
            nombre: PropTypes.string.isRequired,
            cantidad: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default Listado;
