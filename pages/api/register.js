import dbConnect from "@/utils/dbConnect";
import Users from "@/Models/Userschema";
import generateRandomPassword from "@/utils/generateRandomPassword";

export default async function Register (req, res){

  await dbConnect();

  try {
    
    const findUser = await Users.findOne({email: req.body});

    if(findUser) return res.status(400).send({message: 'User already exists'});


    const generatedPassword = generateRandomPassword(6);
 
    const newUser = new Users({
      email: req.body,
      password: generatedPassword
    });

    newUser.save().then((savedUser) => {
      res.status(200).send({message: `register successfully - your password is ${generatedPassword}`});
    }).catch((error) => {
      res.status(500).send({message: `Error occurred ${error}`});
    });

  } catch (error) {
    res.status(500).send({message: `Error occurred ${error}`});
  }

}


export const config = {
  api: {
    externalResolver: true,
  },
}