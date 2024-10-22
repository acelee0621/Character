import { getOriginInfo } from "@/utils/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default async function OriginTable() {
  
  const originInfo = await getOriginInfo();
  
  const origin = originInfo?.map((item)=>{
    return {
      id: item.id,
      name:item.originName,
      character:item.character,
      count:item._count.character
    }    
  });
  // console.log(origin);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Character Count</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {origin?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.count}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
