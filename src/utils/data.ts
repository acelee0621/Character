import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCharacter = async () => {
  try {
    const character = await prisma.character.findMany();
    // console.log(character);
    return character;
  } catch (error) {
    console.error("🚀 ~ file: route.ts:18 ~ GET ~ e:", error);
    return { message: "Internal Server Error" };
  }
};

const itemsPerPage = 6;
export async function getFilteredCharacters(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * itemsPerPage;

  try {
    const characters = await prisma.character.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { gender: { contains: query } },
          { address: { contains: query } },
          { originName: { contains: query } },
        ],
      },
      orderBy: [{ originName: "asc" }],
      take: itemsPerPage,
      skip: offset,
    });

    return characters;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch characters.");
  }
}

export async function getCharacterPages(query: string) {
  try {
    const count = await prisma.character.count({
      where: {
        OR: [
          { name: { contains: query } },
          { gender: { contains: query } },
          { address: { contains: query } },
          { originName: { contains: query } },
        ],
      },
    });

    const totalPages = Math.ceil(Number(count) / itemsPerPage);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of characters.");
  }
}

export const getCharacterById = async (id: string) => {
  try {
    const character = await prisma.character.findUnique({
      where: { id: id },
      // include: { Origin: true },
    });
    if (!character) {
      return { message: "Character not found" };
    }
    return character;
  } catch (error) {
    console.error("Error:", error);
    return { message: "Internal Server Error" };
  }
};

export const getOriginInfo = async () => {
  try {
    const origin = await prisma.origin.findMany({
      include: {
        character: true,
        _count: {
          select: { character: true },
        },
      },
    });

    return origin;
  } catch (error) {
    console.error("🚀 ~ file: route.ts:18 ~ GET ~ e:", error);
    return { message: "Internal Server Error" };
  }
};
