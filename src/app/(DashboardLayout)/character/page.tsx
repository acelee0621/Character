import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import Link from "next/link";
import CharacterTable from "./components/Table";
import { Suspense } from "react";
import { IconPlus } from "@tabler/icons-react";
import { getCharacterPages } from "@/utils/data";
import Search from "./components/search";
import TablePagination from "./components/pagination";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Character',
    default: 'Character Manage',
  },
  description: 'This is an amazing Story Character Management Dashboard.',  
};



export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getCharacterPages(query);  

  

  return (
    <Card sx={{ minHeight: 600 }}>
      <CardHeader title="Character"></CardHeader>
      <CardActions sx={{justifyContent:"flex-end",mr:"10px"}}>
        <Search placeholder="Search characters..."/>
        <Link  href={"/character/create"}>
          <Button variant="contained" size="large" startIcon={<IconPlus/>}>
            Create
          </Button>
        </Link>
      </CardActions>
      <CardContent>
        <Suspense key={query + currentPage}>
        <CharacterTable query={query} currentPage={currentPage} />
        </Suspense>
        <TablePagination totalPages={totalPages} />
      </CardContent>
    </Card>
  );
}
