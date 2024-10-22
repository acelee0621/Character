import { Button, FormControl } from "@mui/material";
import { deleteCharacter } from "@/utils/serverActions";
import Link from "next/link";



export function DeleteCharacter({ id }: { id: string }) {
    const deleteCharacterWithId = deleteCharacter.bind(null, id);
    return (
      <FormControl component="form" action={deleteCharacterWithId}>        
        <Button type="submit">Delete</Button>
      </FormControl>
    );
  }


  export function UpdateCharacter({ id }: { id: string }) {
    return (
      <Link
        href={`/character/${id}/edit`}
        // className="rounded-md border p-2 hover:bg-gray-100"
      >
        <Button>Edit</Button>
      </Link>
    );
  }