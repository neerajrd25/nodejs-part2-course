import fs from 'fs';
import path from "path"
import { exit } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const save = (definitions) => {
  console.log('final data ', definitions);
  fs.writeFile(
    path.join(__dirname,"/ski-terms.json"),
    JSON.stringify(definitions, null, 2),
    (err) => {
      if (err)
        throw err;
      console.log('data saved')
    })
}


export const logger = ((req, res, next) => {
  console.log(`${req.method} is request for ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body)
  }
  next();
})


