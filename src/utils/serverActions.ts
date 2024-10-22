"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createCharacter(formData) {
  const name = formData.get("name");
  const age = formData.get("age");
  const gender = formData.get("gender");
  const address = formData.get("address");
  const originName = formData.get("originName");

  // console.log(name,age,gender,address,originName)
  // Insert data into the database
  try {
    let origin = await prisma.origin.findUnique({
      where: { originName: originName },
    });
    if (!origin) {
      origin = await prisma.origin.create({
        data: {
          originName: originName,
        },
      });
    }
    let character = await prisma.character.findUnique({
      where: { name: name },
    });
    if (!character) {
      character = await prisma.character.create({
        data: {
          name: name,
          age: +age,
          gender: gender,
          address: address,
          originName: originName,
        },
      });
    }
    // return {character, origin} ;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Character.",
    };
  }

  // Revalidate the cache for the  page and redirect the user.
  revalidatePath("/character");
  redirect("/character");
}

export async function deleteCharacter(id: string) {
  try {
    const character = await prisma.character.findUnique({
      where: { id },
    });
    if (!character) {
      return { message: "Character not found" };
    }
    await prisma.character.delete({ where: { id } });
    const characterCount = await prisma.character.count({
      where: { originName: character.originName },
    });
    if (characterCount === 0) {
      await prisma.origin.delete({
        where: { originName: character.originName },
      });
      return { message: "Origin deleted along with characters" };
    }
    revalidatePath("/character");
    return { message: "Character deleted" };
  } catch (error) {
    return { message: "Internal Server Error" };
  }
}

export async function updateCharacter(id: string, formData) {
  
  const newCharacter = {    
    name: formData.get("name"),
    age: formData.get("age"),
    gender: formData.get("gender"),
    address: formData.get("address"),
    originName: formData.get("originName"),
  };

  try {
    const updateCharacter = await prisma.character.update({
      where: {
        id:id,
      },
      data: {
        name: newCharacter.name,
        age: +newCharacter.age,
        gender: newCharacter.gender,
        address: newCharacter.address,
        originName: newCharacter.originName,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return { message: "Internal Server Error" };
  }
  revalidatePath("/character");
  redirect("/character");
}
