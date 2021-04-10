import Editor from "@monaco-editor/react";
import React, { useRef } from 'react';
import { v4 } from 'uuid';
import 'codegrounds/styles/App.css';

function CodingPage({ lesson }) {
	const editorRef = useRef(null);

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	const runFile = async () => {
		const response = await fetch('http://192.168.1.155:1000/runner/javascript', {
			method: 'POST',
			body: JSON.stringify({
				transaction_id: v4(),
				code_data: editorRef.current.getValue()
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (response.status === 200) {
			console.log(response.json())
		} else {
			console.log('Error fetching the API')
		}
	}

	return (
		<div>
			<div className="CodingTopBar">
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<p className="CodingHeader">{lesson.name}</p>
				</div>
				<div className="CodingTopButton" onClick={runFile}>Run</div>
				<div className="CodingTopButton" onClick={() => console.log('Test')}>Test</div>
				<div className="CodingTopButton" onClick={() => console.log('Submit')}>Submit</div>
			</div>
			<Editor
				onMount={handleEditorDidMount}
				theme="vs-dark"
				width="90vw"
				height="95%"
				defaultLanguage="javascript"
				defaultValue="// some comment"
			/>
		</div>
	);
}

export default CodingPage;
