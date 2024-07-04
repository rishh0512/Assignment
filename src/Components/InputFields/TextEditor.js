import React, { useState } from 'react';
import { ImParagraphJustify } from "react-icons/im";
import { ImParagraphLeft } from "react-icons/im";
import { ImParagraphRight } from "react-icons/im";
import './TextEditor.css'
const TextEditor = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Roboto');
  const [paragraph, setParagraph] = useState('Paragraph');
  const [styles, setStyles] = useState({
    fontWeight: 'normal',
    textDecoration: 'none',
    fontStyle: 'normal',
    textAlign: 'left',
   
  });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const toggleStyle = (style) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      ...style,
    }));
  };

  const handleAlignment = (align) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      textAlign: align,
    }));
  };

  return (
    <>

   
    <div className="editor-container">
      <div className="editor-toolbar">
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Roboto">Roboto</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <select value={paragraph} onChange={(e) => setParagraph(e.target.value)}>
          <option value="Paragraph">Paragraph</option>
          <option value="Heading 1">Heading 1</option>
          <option value="Heading 2">Heading 2</option>
        </select>
        <button onClick={() => toggleStyle({ fontWeight: styles.fontWeight === 'bold' ? 'normal' : 'bold' })}><b>B</b></button>
        <button onClick={() => toggleStyle({ textDecoration: styles.textDecoration === 'underline' ? 'none' : 'underline' })}><u>U</u></button>
        <button onClick={() => toggleStyle({ fontStyle: styles.fontStyle === 'italic' ? 'normal' : 'italic' })}><i>I</i></button>
        <button onClick={() => handleAlignment('left')}><ImParagraphJustify/></button>
        <button onClick={() => handleAlignment('center')}><ImParagraphLeft/></button>
        <button onClick={() => handleAlignment('right')}><ImParagraphRight/></button>
      </div>
      <textarea
        style={{ ...styles, fontFamily: font, width: '100%', height: '100px' }}
        value={text}
        onChange={handleTextChange}
        placeholder="Your text goes here"
      />
      
    </div>
    <div className="helper-text">Helper text goes here</div>
    </>
  );
};

export default TextEditor;
