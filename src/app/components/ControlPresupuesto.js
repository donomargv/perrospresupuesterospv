// src/app/components/ControlPresupuesto.js
"use client"; // Asegúrate de que esta línea esté al inicio

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers'; // Asegúrate de que la ruta sea correcta

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
};

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
