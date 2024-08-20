import { Request, Response } from "express";
type HistoryType = {
  history: {
    userId: string;
    prayerId: string;
    date: string;
    recepientName: string;
    payment: string;
    invoiceId: string;
  }[];
};
class MyError extends Error {
  constructor(msg: string) {
    super(msg);
    this.stack = "mojs atsta";
    this.name = "moja error name bro";
    this.cause = "love";
  }
}

export function sendHistories(req: Request, res: Response<HistoryType>) {
  // throw new Error("yo", {
  //   cause: "yo mama so fat",
  // });
  throw new MyError("yoyoy this is msg");
  return res.json({
    history: [
      {
        userId: "65d5a816-d756-5c51-96cc-9fb037e3fbf6",
        prayerId: "ced52b0c-c20e-5831-a58c-c9491925f493",
        date: "12 January, 2025",
        recepientName: "Adam Voigt",
        payment: "3.3",
        invoiceId: "141457f8-33fd-5d2d-838c-4bf4f783b340",
      },
      {
        userId: "653877d7-5d33-5ba4-8530-6294b2240583",
        prayerId: "5e45ca26-fa4f-5f4e-8bf2-d66f6f791184",
        date: "12 January, 2025",
        recepientName: "Lous Griffin",
        payment: "2.5",
        invoiceId: "61eb76bb-dfcc-5a6a-9429-a6ae28a01570",
      },
      {
        userId: "23b6e989-1b86-5faa-a42b-e5454a0c5f92",
        prayerId: "a780412a-8d09-5827-8f80-b65cb17656dd",
        date: "12 January, 2025",
        recepientName: "Peter Griffin",
        payment: "5",
        invoiceId: "6d9070d6-f055-5e16-a891-cee423f75a32",
      },
      {
        userId: "a4f6007b-b026-50b9-a459-369efe80bbff",
        prayerId: "838da110-e96c-549b-919e-7310ee9fe68b",
        date: "12 January, 2025",
        recepientName: "Meg Griffin",
        payment: "5",
        invoiceId: "6a65fe23-2897-500e-9f0a-efde1089d9dd",
      },
      {
        userId: "62b1a2fe-8346-5f72-9ea8-e2378449640d",
        prayerId: "5f4a210b-01a8-5e46-a62f-0b69313ed79c",
        date: "12 January, 2025",
        recepientName: "Devin Fowler",
        payment: "5",
        invoiceId: "1342f0c8-f73a-5e01-9dd7-ea31a43a7289",
      },
      {
        userId: "46d7458a-ac64-5fdd-a3e4-a55e71817ec9",
        prayerId: "77027912-58b1-5eca-87f2-e6b55eca6631",
        date: "12 January, 2025",
        recepientName: "Philip Lawson",
        payment: "5",
        invoiceId: "5ba0805c-ef7e-5f4c-b965-d90fab3274d4",
      },
    ],
  });
}
export class ProtectedController {}
