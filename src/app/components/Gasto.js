// src/app/components/Gasto.js
"use client"; // Asegúrate de que esta línea esté al inicio

import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ gasto }) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">$ {gasto.cantidad}</span>
        </p>
    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.shape({ // Utiliza 'shape' para una mejor validación
        nombre: PropTypes.string.isRequired,
        cantidad: PropTypes.number.isRequired
    }).isRequired
};

export default Gasto;
