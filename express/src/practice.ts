import { z } from "zod";

const schema = z
  .object({
    userName: z.string().optional(),
    userHobby: z.string().optional(),
    age: z.number(),
  })
  .refine(
    (data) => {
      const { age, userHobby, userName } = data;
      if (userHobby?.trim() === "" && userName?.trim() === "") {
        return false;
      } else return true;
    },
    {
      message: "Either userName or userHobby is required",
      path: ["userName", "userHobby"],
    }
  );

// Example usage
const result = schema.safeParse({
  userName: "dsfdsf",
  userHobby: "",
  // age: 25,
});

if (!result.success) {
  console.log(result.error.errors);
} else {
  console.log("Validation succeeded:", result.data);
}
