"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Stack, Pagination } from "@mui/material";

export default function TablePagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;  

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(createPageURL(value));
  };

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        mt:2
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        shape="rounded"        
      />
    </Stack>
  );
}

