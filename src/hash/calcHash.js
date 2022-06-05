import crypto  from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const path = "./src/hash/files/fileToCalculateHashFor.txt";
    
    try {
        const file = await fs.readFile(path, 'utf-8');
        const hash = crypto.createHash('sha256').update(file).digest('hex');
        console.log(hash);
        return hash;
    } catch (error) {
        console.log(error);      
    }
};

calculateHash();
