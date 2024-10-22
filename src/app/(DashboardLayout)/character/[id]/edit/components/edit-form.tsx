"use client";
import { updateCharacter } from "@/utils/serverActions";
import { FormControl, InputLabel, Input, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

export default function EditForm({ character }) {
  const router = useRouter();
  const updateCharacterWithId = updateCharacter.bind(null, character.id);

  return (
    <FormControl component="form" fullWidth action={updateCharacterWithId}>
      <TextField
        id="name"
        label="Name"
        fullWidth
        variant="outlined"
        margin="normal"
        name="name"
        defaultValue={character.name}
      />
      <TextField
        id="age"
        label="Age"
        type="number"
        fullWidth
        variant="outlined"
        margin="normal"
        name="age"
        defaultValue={character.age}
      />
      <TextField
        id="gender"
        label="Gender"
        fullWidth
        variant="outlined"
        margin="normal"
        name="gender"
        defaultValue={character.gender}
      />
      <TextField
        id="address"
        label="Address"
        fullWidth
        variant="outlined"
        margin="normal"
        name="address"
        defaultValue={character.address}
      />
      <TextField
        id="originName"
        label="Origin"
        fullWidth
        variant="outlined"
        margin="normal"
        name="originName"
        defaultValue={character.originName}
      />
      <Stack spacing={2}>
        <Button type="submit" size="large" variant="contained">
          Edit Character
        </Button>

        <Button
          type="button"
          size="large"
          variant="contained"
          onClick={() => router.push("/character")}
        >
          Cancel
        </Button>
      </Stack>
    </FormControl>
  );
}
