import React from "react";
import { getCharacter, getFilteredCharacters } from "@/utils/data";
import Paper from "@mui/material/Paper";
import { DeleteCharacter, UpdateCharacter } from "./action-buttons";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default async function CharacterTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  
  // const character = await getCharacter();  
  
  const character = await getFilteredCharacters(query, currentPage);
  // console.log(character);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Num</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {character?.map((row,index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell> 
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.originName}</TableCell>
                <TableCell>
                  <UpdateCharacter id={row.id} />
                  <DeleteCharacter id={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
