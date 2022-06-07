/// <reference types="react" />
declare function SilicaFormBody(props: {
    id: any;
    schema: any;
    uischema: any;
    data: any;
    setData: any;
    djangoErrors: any;
    customRenderers: any;
    customCells: any;
    onChange: any;
}): JSX.Element;
declare namespace SilicaFormBody {
    var propTypes: {};
    var defaultProps: {
        schema: any;
        uischema: any;
        data: any;
        djangoErrors: any;
        customCells: any[];
        customRenderers: any[];
    };
}
export default SilicaFormBody;
