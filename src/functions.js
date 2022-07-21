import { read, writeFileXLSX } from "./xlsx.mjs"

export const Import = (data) => {
    const workbook = read(data)
    console.log(Object.keys(workbook.Sheets.Sheet1).length)
}
