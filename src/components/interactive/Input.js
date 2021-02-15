// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import React, { forwardRef } from 'react';

import { Button } from '~components/interactive/Button';
import { Fieldset } from '~components/interactive/Fieldset';
import { Radio } from '~components/interactive/Radio';
import TextInput from '~components/interactive/TextInput';

import { Label } from '~components/text/Label';
import { Legend } from '~components/text/Legend';
import { Tooltip } from '~components/text/Tooltip';
import { Error } from '~components/text/Error';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Input = forwardRef(
  (
    {
      placeholder,
      description,
      readOnly,
      required,
      checked,
      options,
      pattern,
      label,
      error,
      value,
      type,
      step,
      name,
      rows,
      min,
      max,
      css,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const renderInput = () => {
      if (type === 'radio') {
        return (
          <>
            {label && <Legend>{label}</Legend>}

            {options.map((radio) => {
              const checked = radio.checked;
              const value = radio.value;
              const label = radio.label;
              const props = {
                checked,
                value,
                required,
                name,
                onChange,
              };
              return (
                <Label key={value} htmlFor={value}>
                  <Radio ref={ref} id={value} {...props} />
                  <span>{label}</span>
                </Label>
              );
            })}
            {description && <Tooltip>{description}</Tooltip>}
          </>
        );
      }

      const TextInputProp = {
        placeholder,
        readOnly,
        required,
        pattern,
        value,
        type,
        name,
        step,
        min,
        max,
        onChange,
      };

      return (
        <>
          <TextInput ref={ref} id={name} {...TextInputProp} {...rest} />
          <Label htmlFor={name}>{label}</Label>

          {description && <Tooltip>{description}</Tooltip>}
          {error && <Error>{error}</Error>}
        </>
      );
    };

    if (type === 'submit') {
      return <Button as="input" type="submit" value={label} />;
    }

    const renderedInputs = renderInput();

    return (
      <>
        <Fieldset {...rest}>{renderedInputs}</Fieldset>
      </>
    );
  },
);

export default Input;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

Input.displayName = 'Input';
