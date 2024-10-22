"use client";
import { FormControl, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { createCharacter } from "@/utils/serverActions";

export default function CreateForm() {
  const router = useRouter();

  return (
    <FormControl component="form" fullWidth action={createCharacter}>
      <TextField
        id="name"
        label="Name"
        fullWidth
        variant="outlined"
        margin="normal"
        name="name"
      />
      <TextField
        id="age"
        label="Age"
        type="number"
        fullWidth
        variant="outlined"
        margin="normal"
        name="age"
      />
      <TextField
        id="gender"
        label="Gender"
        fullWidth
        variant="outlined"
        margin="normal"
        name="gender"
      />
      <TextField
        id="address"
        label="Address"
        fullWidth
        variant="outlined"
        margin="normal"
        name="address"
      />
      <TextField
        id="originName"
        label="Origin"
        fullWidth
        variant="outlined"
        margin="normal"
        name="originName"
      />
      <Stack spacing={2}>
        <Button type="submit" size="large" variant="contained">
          Create Character
        </Button>

        <Button
          size="large"
          type="button"
          variant="contained"
          onClick={() => {
            router.push("/character");
          }}
        >
          Cancel
        </Button>
      </Stack>
    </FormControl>
  );
}
