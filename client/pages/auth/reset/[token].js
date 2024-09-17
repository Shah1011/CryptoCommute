import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { useRouter } from "next/router";

import axios from "axios";

const ResetPassword = () => {
  const [resetInput, setResetInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setResetInput({ ...resetInput, [event.target.name]: event.target.value });
  };

  const toast = useToast();

  const router = useRouter();

  const handleSubmit = async () => {
   try {
    if (!resetInput.newPassword) {
        toast({
          title: "Password cannot be empty.",
          description: "Please make sure you enter your NewPassword!",
          duration: 3000,
          status: "error",
          isClosable: true,
          position: "top",
        });
        return;
      } else if (!resetInput.confirmPassword) {
        toast({
          title: "Password cannot be empty.",
          description: "Please make sure you enter your ConfirmPassword!",
          duration: 3000,
          status: "error",
          isClosable: true,
          position: "top",
        });
        return;
      } else if (resetInput.newPassword !== resetInput.confirmPassword) {
        toast({
          title: "Password is not equal.",
          description: "Please make sure you enter Correct Password!",
          duration: 3000,
          status: "error",
          isClosable: true,
          position: "top",
        });
        return;
      }
  
      const { token } = router.query;
      const resetHandler = await axios({
        method: "POST",
        url: "auth/reset",
        headers: { authorization: `Bearer ${token}` },
        data: { payload: { newPassword: resetInput.newPassword } },
      });
      
    

   }catch (error){
    console.log({error});
      toast({
        title: error?.response?.data?.error || "Internal Server Error",
        description: "Please make sure you enter your Password!",
        duration: 3000,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
       
   }
}
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Enter new password
        </Heading>
        <FormControl id="passsword" isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            value={resetInput.newPassword}
            onChange={handleChange}
            name="newPassword"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Confirm Pssword</FormLabel>
          <Input
            type="password"
            value={resetInput.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
