import React, { useRef, useState } from 'react';

function Input({ text, type, onChangeInput }) {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [isDivFocused, setIsDivFocused] = useState(false);

  const [value, setValue] = useState('');


  const handleDivClick = () => {
    inputRef.current.focus();
  };

  const handleDivFocus = (e) => {
    if (e.target === divRef.current) {
      setIsDivFocused(true);
    }
  };

  const handleDivBlur = (e) => {
    if (e.target !== divRef.current && !value) {
      setIsDivFocused(false);
    }
  };


  const handleOnChange = (s) => {
    onChangeInput(s)
  }

  return (
    <div
      ref={divRef}
      onClick={handleDivClick}
      onFocus={handleDivFocus}
      onBlur={handleDivBlur}
      tabIndex={-1}
      className="input-component"
    >
      <p className={isDivFocused ? 'focused-p' : ""}>{text}</p>
      <input
        ref={inputRef}
        type={type}
        placeholder=""
        className={isDivFocused ? 'focused-input' : ""}
        onChange={(s)=> {handleOnChange(s.target.value); setValue(s.target.value)}}
      />
    </div>
  );
}

export default Input;
