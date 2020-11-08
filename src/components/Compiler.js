import { React, useState } from 'react'
import { Button } from 'reactstrap';
import { logic, operator, delimiter, keywordJs, keywordCpp, keywordPy } from '../assets/DataKeyword'
const Compiler = () => {
    const exCode = 'print ( " Hello World " ) ;'
    const [code, setCode] = useState(exCode)
    const [error, setError] = useState(0)
    const [result, setResult] = useState([])
    const [table, setTable] = useState(0)
    const handleCompile = () => {
        if (code !== '') {
            const arrayCode = code.replace(/(\r\n|\n)/gm, " ").split(" ")
            const arrayResult = arrayCode.map(code => {
                for (let i = 0; i < operator.length; i++) {
                    if (code === operator[i]) return { syntax: code, result: "Operator" }
                }
                for (let i = 0; i < delimiter.length; i++) {
                    if (code === delimiter[i]) return { syntax: code, result: "Delimiter" }
                }
                for (let i = 0; i < logic.length; i++) {
                    if (code === logic[i]) return { syntax: code, result: "Logic" }
                }
                for (let i = 0; i < keywordJs.length; i++) {
                    if (code === keywordJs[i]) return { syntax: code, result: "Keyword" }
                }
                for (let i = 0; i < keywordPy.length; i++) {
                    if (code === keywordPy[i]) return { syntax: code, result: "Keyword" }
                }
                for (let i = 0; i < keywordCpp.length; i++) {
                    if (code === keywordCpp[i]) return { syntax: code, result: "Keyword" }
                }
                return { syntax: code, result: "Identifier" }
            })
            setResult(arrayResult)
            setError(0)
            setTable(1)
        } else {
            setError(1)
        }
    }
    const handleReset = () => {
        setCode('')
        setError(0)
        setTable(0)
    }
    return (
        <div className="compiler" id="compiler">
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <h1>COMPILER MINI </h1>
                        {error === 1 ? <div className="alert alert-danger" role="alert"> Please, write your code!</div> : null}
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Write Your Code Here ... " onChange={(text) => setCode(text.target.value)} value={code}>
                            </textarea>
                        </div>
                        <button onClick={handleCompile} className="btn btn-primary mr-3">COMPILE</button>
                        <Button onClick={handleReset} className="btn btn-danger">RESET</Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        {
                            table === 1 ?
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Code</th>
                                            <th scope="col">Analysis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            result.map((res, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.syntax}</td>
                                                        <td>{res.result}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table> :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compiler
