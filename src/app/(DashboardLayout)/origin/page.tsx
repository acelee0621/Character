import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Suspense } from "react";
import Loading from "@/app/loading";
import OriginTable from "./components/Table";

export default async function Page() {
  
  

  return (
    <Card sx={{ minHeight: 600 }}>
      <CardHeader title="Origin"></CardHeader>
      {/* <CardActions sx={{justifyContent:"flex-end",}}>
        <Link href={"/character/create"}>
          <Button variant="contained" size="large">
            Create
          </Button>
        </Link>
      </CardActions> */}
      <CardContent>
        <Suspense fallback={<Loading/>}>
        <OriginTable />
        </Suspense>
      </CardContent>
    </Card>
  );
}
