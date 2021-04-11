import 'codegrounds/styles/App.css';
import openImg from 'codegrounds/images/OpenConsole.png'
import closeImg from 'codegrounds/images/CloseConsole.png'

export function Console({contents, open, setOpen}) {

    return (
        <div style={{width: '100%'}}>
            <div className="ConsoleTopBar">
                <img src={open ? closeImg : openImg} style={{width:30, height: 30, cursor: 'pointer', paddingRight: 20}} alt="toggle console" onClick={() => setOpen(!open)}/>
            </div>
            {open ?
                <div className="ConsoleTextArea">
                    {contents.split('\n').map(line => (
                        <p style={{margin: 0, padding: 0}}>{line}</p>
                    ))}
                </div>
                : null
            }
        </div>
    );
}
