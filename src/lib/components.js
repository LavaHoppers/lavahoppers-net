/**
 * Display a block of python code with syntax highlighting
 * TODO support more languages
 * @param {string} children the code to display
 * @returns 
 */
export function CodeBlock ({ children }) {

    let output = Array();
    let lines = children.split('\n');
    for (let i = 0; i < lines.length; i++)
        output.push(<PythonCodeLine i={i} line={lines[i]} />)
    
    
    return output;
    
}

/**
 * Returns a react component with just one line of code numbered `i`
 * 
 * @param {int} i the line number
 * @param {string} line the text to render
 * @returns the text as a rendered line of code
 */
function PythonCodeLine({i, line}) {

    const py_kwrds = ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

    // line numbering
    let digits = i.toString().length;
    let lineNumber = <span className="noselect" style={{ color: "#777" }}>{" ".repeat(3-digits) + i + " "}</span>
    if (i > 999) return <></>;

    // pop the line apart    
    let regex = /('''.*?'''|'.*?'|""".*?"""|".*?"|#.*|\w+)/
    let words = line.split(regex)
    words = words.filter(n => n) // drop nulls

    // color everything
    words = words.map(word => {
        let color = "#ddd"
        if(py_kwrds.includes(word)) // key words
            return <b style={{ color: "#ef476f" }}>{word}</b>
        if(word.match(/#.*/)) // comments
            return <span style={{ color: "#59931f"}}>{word}</span>
        if(word.match(/".*"|'.*'/)) // strings
            return <span style={{ color: "#f6be6f" }}>{word}</span>
        if(word.match(/\w+/)) // user words
            return <span style={{ color: "#70d6ff" }}>{word}</span>
        return <span style={{ color: "#f1faee" }}>{word}</span>
    })

    // return the finished line
    let format = { fontFamily: "monospace, monospace", margin: 0, whiteSpace: "pre", maxWidth: "200px", wordWrap: "break-word", lineHeight: "14pt"}
    return <p style={format}>{lineNumber}{words}</p>;
}
