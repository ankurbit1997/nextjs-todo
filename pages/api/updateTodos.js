import { table, minifySingleRecord } from "./utils/Airtable";

export default async function handler(req, res) {
  const { id, fields } = req.body;
  try {
    const updateRecord = await table.update([{ id, fields }]);

    res.status(200).json(minifySingleRecord(updateRecord[0]));
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Oops! Something went wrong" });
  }
}
