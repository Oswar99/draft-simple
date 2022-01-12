import React, { useState } from "react";

interface IBarState {
    handleInlineStyle: (command: string) => void;
    handleBlockStyle: (command: string) => void;
}

const BarState: React.FC<IBarState> = ({ handleInlineStyle, handleBlockStyle }) => {

    const [dS, setDs] = useState("dropdown-menu");

    function dButton() {
        if (dS === "dropdown-menu") {
            setDs("dropdown-menu d-flex text-center");
        } else {
            setDs("dropdown-menu");
        };
    };

    return (
        <div className="rounded shadow-sm" style={{ marginBottom: 15, marginTop: 15, backgroundColor:"#088A4B", color:"#FFFFFF" }}>

            <button className="btn" style={{color:"white"}}  onClick={() => { handleBlockStyle("header-one"); setDs("dropdown-menu") }} >H1</button>
            <button className="btn" style={{color:"white"}}  onClick={() => { handleBlockStyle("header-two"); setDs("dropdown-menu") }} >H2</button>
            <button className="btn" style={{color:"white"}}  onClick={() => { handleBlockStyle("header-three"); setDs("dropdown-menu") }} >H3</button>
            <button className="btn" style={{color:"white"}}  onClick={() => { handleBlockStyle("header-four"); setDs("dropdown-menu") }} >H4</button>
            <button className="btn" style={{color:"white"}}  onClick={() => { handleBlockStyle("header-five"); setDs("dropdown-menu") }} >H5</button>
            <button className="btn" style={{color:"white"}}  onClick={() => { handleBlockStyle("header-six"); setDs("dropdown-menu") }} >H6</button>

         

            <button className="btn" style={{color:"white"}}  onClick={() => handleInlineStyle('BOLD')}>B</button>
            <button className="btn" style={{color:"white", fontStyle: "italic" }} onClick={() => handleInlineStyle('ITALIC')}>I</button>
            <button className="btn" style={{color:"white", textDecoration: "underline" }} onClick={() => handleInlineStyle('UNDERLINE')}>U</button>
            <button className="btn" style={{color:"white"}}  onClick={() => handleInlineStyle('STRIKETHROUGH')}><s>S</s></button>
            {
                //<button className="btn" onClick={() => handleBlockStyle("code-block")} >{"</>"}</button>
                //<button className="btn" onClick={() => handleBlockStyle("blockquote")} >bq</button>
            }
            <button className="btn" style={{color:"white"}} onClick={() => handleBlockStyle("ordered-list-item")} >ol</button>
            <button className="btn" style={{color:"white"}} onClick={() => handleBlockStyle("unordered-list-item")} >ul</button>
        </div>
    )
};

export default BarState;