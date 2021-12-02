import { table, minifyRecords, minifySingleRecord } from "./utils/Airtable";

export default async function handler(req, res) {
  try {
    const records = await table.select({}).firstPage();
    res.status(200).json(minifyRecords(records));
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Oops! Something went wrong" });
  }
}
