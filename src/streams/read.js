import { open } from "fs/promises";

export const read = async () => {
  try {
    const file = await open("./src/streams/files/fileToRead.txt");
    const stream = file.createReadStream();
    setTimeout(() => {
      stream.close();
      stream.push(null);
      stream.read(0);
    }, 100);
  } catch (error) {
      console.log(error);
  }
};

read();
