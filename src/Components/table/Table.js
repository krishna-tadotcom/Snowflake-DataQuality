import "./table.scss";
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

const List = ({ header, data, w, setColArray,setExpArray }) => {
  const [pageN, setPage] = useState(2)
  const [load, setLoad] = useState(false)
 
  

 




  return (

    <div>
     <TableContainer component={Paper} className="table" style={{ width: w, overflowX: "hidden" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="t">

              {header.map(h => (
                <TableCell className="tableCell head" style={{ paddingLeft: "60px" }}>
                {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {header[0] === 'columns' ?
            <TableBody>

            </TableBody>
            :
            <TableBody></TableBody>
          }



          <TableBody>
            {data.map((row) => (

              <>

                <TableRow>

                  {header[0] === 'columns' ? <TableCell className="tableCell bo"
                    
                    onClick={(e) => {
                      if (e.target.className === 'col') {
                        setColArray(prev=>[...prev,e.target.innerHTML])
                      }
                    }}>

                    <div style={{ marginLeft: "25px" }} className="col" name={row}>
                      {row}
                    </div>

                  </TableCell>
                    :
                    
                      <TableCell className="tableCell bo"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          if (e.target.className === 'col') {
                            setExpArray(prev=>[...prev,e.target.innerHTML])
                            
                          }
                        }}>

                        <div style={{ marginLeft: "25px" }} className="col" name={row}>
                          {row}
                        </div>

                      </TableCell> 
                     


                  }
                </TableRow>

              </>
            ))}
          </TableBody>
        </Table>

      </TableContainer>

    </div>
  );
};

export default List;






