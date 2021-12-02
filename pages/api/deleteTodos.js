import { table, minifySingleRecord } from "./utils/Airtable";

export default async function handler(req, res) {
  const { id } = req.body;
  try {
    const deleteRecord = await table.destroy([id]);
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Oops! Something went wrong" });
  }
}
