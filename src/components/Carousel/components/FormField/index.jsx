import React from 'react';
import PropTypes from 'prop-types';
import FormFieldContainer from './styles';

function FormField({
  type, name, caption, value, onChange, hintList,
}) {
  const Tag = (type === 'textarea') ? 'textarea' : 'input';
  return (
    <FormFieldContainer>
      <FormFieldContainer.Label>
        <Tag name={name} value={value} type={type} onChange={onChange} list={hintList.length > 0 ? `histlist_${name}` : undefined} />
        <FormFieldContainer.Caption>{caption}</FormFieldContainer.Caption>
      </FormFieldContainer.Label>
      { hintList.length > 0 && (
        <datalist id={`histlist_${name}`}>
          {
            hintList.map((hint) => (
              <option key={hint} value={hint}>
                {hint}
              </option>
            ))
          }
        </datalist>
      )}
    </FormFieldContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
  hintList: [],
};

FormField.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  hintList: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
