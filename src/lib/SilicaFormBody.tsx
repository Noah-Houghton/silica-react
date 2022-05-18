import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {readDOMScript} from "../util/ReadDOMScript";
import { JsonForms } from '@jsonforms/react';
import { silicaRenderers, silicaCells } from "../index";

SilicaFormBody.propTypes = {
    
};

SilicaFormBody.defaultProps = {
    schema: null,
    uischema: null,
    data: null,
    djangoErrors: null,
    customCells: [],
    customRenderers: [],
}

function SilicaFormBody(props) {
    const {id, schema, uischema, data, setData, djangoErrors, customRenderers, customCells, onChange} = props;
    const DOMSchema = readDOMScript(id + '-schema');
    const DOMUischema = readDOMScript(id + '-ui-schema');
    const DOMData = readDOMScript(id + '-data');
    const DOMDjangoErrors = readDOMScript(id + '-django-errors');
    const _schema = schema || DOMSchema;
    const _uischema = uischema || DOMUischema;
    const _data = data || DOMData;
    const _djangoErrors = djangoErrors || DOMDjangoErrors;
    const renderers = silicaRenderers + (window['SilicaCustomRenderers'] || []) + customRenderers;
    const cells = silicaCells + (window['SilicaCustomCells'] || []) + customCells;
    const SilicaContext = React.createContext({});    
    return (
        <SilicaContext.Provider value={{djangoErrors: _djangoErrors}}>
            <JsonForms
                schema={_schema}
                uischema={_uischema}
                data={_data}
                renderers={renderers}
                cells={cells}
                onChange={({ data, _errors }) => {
                    setData(data);
                    if (onChange) {
                        onChange(data);
                    }
                }}
            />
        </SilicaContext.Provider>
    );
}

export default SilicaFormBody;