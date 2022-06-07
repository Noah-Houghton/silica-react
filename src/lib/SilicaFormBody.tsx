import React from 'react';
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

function SilicaFormBody(props: { id: any; schema: any; uischema: any; data: any; setData: any; djangoErrors: any; customRenderers: any; customCells: any; onChange: any; }) {
    const {id, schema, uischema, data, setData, djangoErrors, customRenderers, customCells, onChange} = props;
    const DOMSchema = readDOMScript(id + '-schema');
    const DOMUischema = readDOMScript(id + '-ui-schema');
    const DOMData = readDOMScript(id + '-data');
    const DOMDjangoErrors = readDOMScript(id + '-django-errors');
    const _schema = schema || DOMSchema;
    const _uischema = uischema || DOMUischema;
    const _data = data || DOMData;
    const _djangoErrors = djangoErrors || DOMDjangoErrors;
    // @ts-ignore
    const renderers = silicaRenderers + (window['SilicaCustomRenderers'] || []) + customRenderers;
    // @ts-ignore
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
                onChange={({ data }) => {
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