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
import { useNavigate } from "react-router";

const Saved = ({}) => {
  const [pageN, setPage] = useState(8)
  const [load, setLoad] = useState(false)
  const [rows, setRows] = useState([]);




  const [search, setSearch] = useState([])
  const [se, setSe] = useState('')

  useEffect(() => {
    if (localStorage.getItem('savedData')) {
      setRows(JSON.parse(localStorage.getItem('savedData')))

    }



  }, [localStorage.getItem('savedData')])


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






 const navigate = useNavigate()

  const edit = (id) => {
    // const data = rows.filter(r => r.id === id)
    // navigate(`/editSaved/${id}`)
    // showEditPop(data[0].ProjectName,data[0].Dataset,data[0].column,data[0].Expectation,data[0].inputs)
  }

  const deletion = (id) => {
    // const rows = JSON.parse(localStorage.getItem('savedData'))
    // const data = rows.filter(r => r.id !== id)
    // localStorage.setItem('savedData', JSON.stringify(data))
    // setRows(JSON.parse(localStorage.getItem('savedData')))
  }




  //reduce row height
  return (

    <>
       {/* <div>

        <input className="in" placeholder="Search by columns..." autoComplete="off" type="text" name="search" value={se} onChange={changeSe} />
        <select onChange={selecting} style={{
          padding: "10px", border: "none", borderBottom: "2px solid rgb(114, 111, 111)", outline: "none",marginBottom:"5px"
        }}>
          <option>Paginate</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </div> */}


      <TableContainer component={Paper} className="table " 
      style={{
              height: "238px",
              display: "inline-block",
              width: "700px",
              overflowX:"scroll"
             
              
            }}
            >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow className="t">
              <TableCell className="tableCell head">Id</TableCell>
              <TableCell className="tableCell head">Columns</TableCell>
              <TableCell className="tableCell head">Expectation</TableCell>
              <TableCell className="tableCell head">ProjectName</TableCell>
              <TableCell className="tableCell head">Datasets</TableCell>
              <TableCell className="tableCell head">Inputs</TableCell>
              <TableCell className="tableCell head">Edit</TableCell>
              <TableCell className="tableCell head">Delete</TableCell>
              <TableCell className="tableCell head">Extra</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {search.map((row, index) => (

              <>
                {index < pageN && 
                <TableRow key={row.id} style={{height:"1px" ,paddingBottom:"-100px"}}>
                  <TableCell className="tableCell bo">{row.id}</TableCell>

                  <TableCell className="tableCell bo">{row.column}</TableCell>

                  <TableCell className="tableCell bo">{row.Expectation}</TableCell>
                  <TableCell className="tableCell bo">{row.ProjectName}</TableCell>
                  <TableCell className="tableCell bo">{row.Dataset}</TableCell>
                  <TableCell className="tableCell bo" style={{display:"flex",gap:"2px",marginTop:"7.9px",borderTop:"none"}}>
                  
                    {row.inputs.map((i)=><span>{i},</span>)}
                  
                  </TableCell>
                  <TableCell className="tableCell bo">

                    <i className="fa-solid fa-pen-to-square edit" onClick={() => { edit(row.id) }}></i>
                  </TableCell>
                  <TableCell className="tableCell bo">
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
