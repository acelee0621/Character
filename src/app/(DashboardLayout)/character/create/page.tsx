import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "next/link";
import CreateForm from "./components/form-create";
import { Suspense } from "react";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Create | Character',  
  description: 'This is an amazing Story Character Management Dashboard.',  
};

export default async function CreateCharacter() {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: "15px" }}>
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/character/">
          Character
        </Link>
        <Typography sx={{ color: "text.primary" }}>Create Character</Typography>
      </Breadcrumbs>
      <Card sx={{ minHeight: 600 }}>
        <CardHeader title="Create Character"></CardHeader>
        <CardContent>
          <Suspense>
            <CreateForm />
          </Suspense>
        </CardContent>
      </Card>
    </Box>
  );
}
