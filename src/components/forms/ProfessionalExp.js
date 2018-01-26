import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset';

class ProfessionalExp extends Component {
  render() {
    return (

            <Fieldset  formNumber={3} legend="Experiencia Laboral" innerClassname="experiencia-laboral">
              <p id="form-field">Experiencia laboral I</p>
              <input type="text" name="cargo" id="work-type"  placeholder="Cargo" />

              <input type="text" name="company" id="company"  placeholder="Compañía" />

              <input type="text" name="city" id="city"  placeholder="Ciudad" />

              <input type="text" name="country" id="country" placeholder="País" />
              <div className="form-container">
                <div className="form-container-items">
                  <label htmlFor="start">Fecha inicio</label> <br />
                  <select className="months"  id="select-5">
                  </select>
                  <select className="years"  id="select-años-5">
                  </select>
                </div>
                <div className="form-container-items">
                  <label htmlFor="end">Fecha fin</label> <br />
                  <select className="months"  id="select-6">
                  </select>
                  <select className="years"  id="select-años-6">
                  </select>
                </div>
              </div>
              <label htmlFor="descripcion">Descripción</label>
              <textarea name="name" rows={8} cols={80} placeholder={""} />


      </Fieldset>
    );
  }
}

export default ProfessionalExp;
