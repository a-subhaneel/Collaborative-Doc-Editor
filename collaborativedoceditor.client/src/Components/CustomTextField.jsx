import React from 'react';
import TextField from '@material-ui/core/TextField';
import './CustomTextField.scss'; // Import CSS file for styling

function CustomTextField({ label, type ,name, id, required = false, fullWidth = true, autoComplete, autoFocus, value }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      type={type}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      value={value}
      classes={{
        root: 'custom-root',
        outlined: 'custom-outlined',
      }}
    />
  );
}

export default CustomTextField;
