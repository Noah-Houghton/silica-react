import React from 'react';
import SilicaFormBody from "./SilicaFormBody";

SilicaForm.propTypes = {};

SilicaForm.defaultProps = {}

function SilicaForm(props: any) {
    const {
        id,
        submitText,
        onChange,
        handleSubmit,
        submitClass,
        formAttrs,
        method,
        action,
        csrfToken,
        addSubmitButton,
        preBody,
        postBody,
    } = props;
    return (
        <form id={id} {...formAttrs} method={method} action={action} onSubmit={handleSubmit}>
            {preBody && <React.Fragment>{preBody}</React.Fragment>}
            <SilicaFormBody id={id} onChange={onChange} {...props}/>
            {postBody && <React.Fragment>{postBody}</React.Fragment>}
            {csrfToken && <input name="csrfmiddlewaretoken" value={csrfToken} hidden/>}
            {addSubmitButton && <button className={submitClass} type="submit">{submitText || 'Submit'}</button>}
        </form>
    );
}

export default SilicaForm;