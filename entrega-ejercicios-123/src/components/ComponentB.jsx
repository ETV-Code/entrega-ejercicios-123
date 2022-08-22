import React from 'react';
import PropTypes from 'prop-types';


const ComponentB = ({name, lastname ,email,setConnected,connected}) => {
    return (
        <div>
            <br/>
            <ul>
                <li>
                    {`Nombre: ${name} ${lastname}`}
                </li>

                <li>
                    {`Email: ${email}`}
                </li>

                <p>
                    {connected 
                        ? "Contacto en linea " 
                        : "Contacto no disponible"
                    }
                </p>

            </ul>

            <button
                onClick={() => {setConnected(connected)}}
            >
                {connected 
                    ? 'desconectarse' 
                    : 'conectarse'
                }
            </button> 
        </div>
    );
};

ComponentB.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    connected: PropTypes.bool,
    setConnected: PropTypes.func
};


export default ComponentB;
