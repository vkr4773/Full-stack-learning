const z = require('zod');
const express = require('express');

const app = express();

function validateInput(obj){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    });
    const response = schema.safeParse(obj);
    console.log(response);
    return response;
}

app.post("/login", function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            msg: "your inputs are invalid"
        });
    }
    return;
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});


what are the valid inputs for the above code snippet?

- {email: " ", password: " "}   // 1