// src/app/helpers.js
export const revisarPresupuesto = (presupuesto, restante) => {
    const porcentaje = (restante / presupuesto) * 100;

    if (porcentaje < 25) {
        return 'alert alert-danger'; // Menos del 25%
    } else if (porcentaje < 50) {
        return 'alert alert-warning'; // Menos del 50%
    } else {
        return 'alert alert-success'; // Más del 50%
    }
};
