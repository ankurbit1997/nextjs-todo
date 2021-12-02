import { table } from "./utils/Airtable";

export default async function handler(req, res) {
  const { description } = req.body;
  try {
    const createdRecords = await table.create([
      { fields: { description: description } },
    ]);

    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.status(200).json(createdRecord);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Oops! Something went wrong" });
  }
}
