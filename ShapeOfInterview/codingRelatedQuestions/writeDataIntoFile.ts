// @ts-expect-error Node.js type definitions are not configured in this project.
import { writeFileSync } from "node:fs";

const data = "Hello World";
writeFileSync('output.text', data);
console.log("its written");

