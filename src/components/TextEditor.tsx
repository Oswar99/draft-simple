import React, { useState } from "react";
import {DraftHandleValue, Editor, EditorState, RichUtils} from 'draft-js';
import BarState from "./BarState";

//crreado por OswarCruz - oswar.cruzn499@gmail.com

const TextEdit : React.FC = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    function handleKeyCommand(command:string, eState: EditorState): DraftHandleValue {
        const newState = RichUtils.handleKeyCommand(eState, command);

        if(newState){
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    function handleInlineStyle(name: string){
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            setEditorState(RichUtils.toggleInlineStyle(editorState, name));
        }else{
            setEditorState(EditorState.forceSelection(editorState, selection));
        };
    };

    //function setEntity(){
    //    const contentState = editorState.getCurrentContent();
    //    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
    //        url: 'https://www.facebook.com',
    //    });
    //    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    //    const contentStateWithLink = Modifier.applyEntity(
    //        contentStateWithEntity,
    //        new SelectionState(),
    //        entityKey
    //    );
    //    const newEditorState = EditorState.set(editorState, {
    //        currentContent : contentStateWithLink
    //    })
    //    setEditorState(newEditorState)
    //}

    function handleBlockStyle(command: string) {
        setEditorState(RichUtils.toggleBlockType(editorState, command));
    };

    return(
        <div className="container rounded shadow-sm" style={{marginTop:10, marginBottom:10}}>
            <div className="py-3">
                <BarState handleInlineStyle={handleInlineStyle} handleBlockStyle={handleBlockStyle} />
                <Editor 
                    editorState={editorState} 
                    onChange={setEditorState} 
                    handleKeyCommand={handleKeyCommand}
                />
            </div>
        </div>
    )
}

export default TextEdit;