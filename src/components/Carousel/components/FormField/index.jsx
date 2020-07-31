import React from 'react';
import PropTypes from 'prop-types';
import FormFieldContainer from './styles';

function FormField({
  type, name, caption, value, onChange,
}) {
  return (
    <FormFieldContainer>
      <FormFieldContainer.Label>
        {((type === 'textarea'
          && <textarea name={name} value={value} onChange={onChange} />)
          || <input name={name} type={type} value={value} onChange={onChange} />)}
        <FormFieldContainer.Caption>{caption}</FormFieldContainer.Caption>
      </FormFieldContainer.Label>
    </FormFieldContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormField;
