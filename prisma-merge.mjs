import fs from "fs"
import path from "path"
const headerPath = path.resolve("./prisma/_header.prisma");
const modelsDir = path.resolve("src/models");

const outputPath = path.resolve("./prisma");

const header = fs.readFileSync(headerPath, "utf-8");
const modelFiles = fs
    .readdirSync(modelsDir)
    .filter(file => file.endsWith(".prisma"))
    .map(file => fs.readFileSync(path.join(modelsDir, file), "utf-8"))
    .join("\n\n");

fs.writeFileSync(outputPath + "/.schema.prisma", `${header}\n\n${modelFiles}`);
console.log("✅ Prisma schema generated successfully.");