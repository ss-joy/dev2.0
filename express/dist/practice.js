"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const schema = zod_1.z
    .object({
    userName: zod_1.z.string().optional(),
    userHobby: zod_1.z.string().optional(),
    age: zod_1.z.number(),
})
    .refine((data) => {
    const { age, userHobby, userName } = data;
    if (userHobby?.trim() === "" && userName?.trim() === "") {
        return false;
    }
    else
        return true;
}, {
    message: "Either userName or userHobby is required",
    path: ["userName", "userHobby"],
});
// Example usage
const result = schema.safeParse({
    userName: "dsfdsf",
    userHobby: "",
    // age: 25,
});
if (!result.success) {
    console.log(result.error.errors);
}
else {
    console.log("Validation succeeded:", result.data);
}
