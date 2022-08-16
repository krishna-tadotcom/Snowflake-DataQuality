import "./saved.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Search } from "js-search";

const Saved = () => {
  const [pageN, setPage] = useState(8)
  const [load, setLoad] = useState(false)
  const [rows, setRows] = useState([]);




  const [search, setSearch] = useState([])
  const [se, setSe] = useState('')

  useEffect(() => {
    if (localStorage.getItem('savedData')) {
      setRows(JSON.parse(localStorage.getItem('savedData')))

    }



  }, [])
  useEffect(() => {
    setSearch([...rows])
  }, [rows])








  const changeSe = (e) => {
    setSe(e.target.value)
    if (e.target.value !== '') {


      var sea = new Search('id')
      sea.addIndex('column')

      sea.addIndex('Expectation')

      sea.addDocuments([...rows])

      const d = sea.search(e.target.value)


      setSearch(d)

    }
    //use time ==> jssearch, use => react table, material ui, loadsh
    else {
      setSe('')
      setSearch([...JSON.parse(localStorage.getItem('savedData'))])
    }

  }


  const selecting = (e) => {
    setPage(e.target.value)
  }


  const datas = async () => {
    const s = document.documentElement.scrollHeight - window.innerHeight
    const sc = window.scrollY


    if (Math.ceil(sc) === s) {

      setPage(pageN + 1)
      setLoad(false)

    }


  }

  if (pageN < rows.length) {


    setTimeout(() => {
      setLoad(true)

      window.addEventListener('scroll', datas)

    }, 1000)



  }







  const edit = (id) => {
    const data = rows.filter(r => r.id === id)
    console.log(data[0].column)
  }
  const deletion = (id) => {
    const rows = JSON.parse(localStorage.getItem('savedData'))
    const data = rows.filter(r => r.id !== id)
    localStorage.setItem('savedData', JSON.stringify(data))
    setRows(JSON.parse(localStorage.getItem('savedData')))
  }




  //reduce row height
  return (

    <>
      <div>

        <input className="in" placeholder="Search by columns..." autoComplete="off" type="text" name="search" value={se} onChange={changeSe} />
        <select onChange={selecting} style={{
          padding: "10px", border: "none", borderBottom: "2px solid rgb(114, 111, 111)", outline: "none"
        }}>
          <option>Paginate</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </div>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="t">
              <TableCell className="tableCell head">ID</TableCell>
              <TableCell className="tableCell head">COLUMNS</TableCell>
              <TableCell className="tableCell head">EXPECTATIONS</TableCell>
              <TableCell className="tableCell head">INPUTS</TableCell>
              <TableCell className="tableCell head">EDIT</TableCell>
              <TableCell className="tableCell head">DELETE</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {search.map((row, index) => (

              <>
                {index < pageN && <TableRow key={row.id}>
                  <TableCell className="tableCell bo">{row.id}</TableCell>

                  <TableCell className="tableCell bo">{row.column}</TableCell>

                  <TableCell className="tableCell bo">{row.Expectation}</TableCell>
                  <TableCell className="tableCell">
                  
                    {row.inputs[0].map((i)=><p>{i}</p>)}
                  
                  </TableCell>
                  <TableCell className="tableCell">

                    <i className="fa-solid fa-pen-to-square edit" onClick={() => { edit(row.id) }}></i>
                  </TableCell>
                  <TableCell className="tableCell">
                    <i className="fa-solid fa-trash del" onClick={() => { deletion(row.id) }}></i>
                  </TableCell>

                </TableRow>}
              </>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      {load === true && <p style={{ textAlign: "center", padding: "15px" }}>Loading More...</p>}
    </>
  );
};

export default Saved;
