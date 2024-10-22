import { getCharacterById } from "@/utils/data";
import {
  Breadcrumbs,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { notFound } from "next/navigation";
import EditForm from "./components/edit-form";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Edit | Character',  
  description: 'This is an amazing Story Character Management Dashboard.',  
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const character = await getCharacterById(id);

  // console.log(character)

  if (!character) {
    notFound();
  }

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{mb:"15px"}}>
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/character/">
          Character
        </Link>
        <Typography sx={{ color: "text.primary" }}>Edit Character</Typography>
      </Breadcrumbs>
      <Card sx={{ minHeight: 600 }}>
        <CardHeader title="Edit Character"></CardHeader>
        <CardContent>
          <Suspense>
            <EditForm character={character} />
          </Suspense>
        </CardContent>
      </Card>
    </Box>
  );
}
