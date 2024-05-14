"use client";
import {
  Box,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Form = {
  [x: string]: string;
};




const Form: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  



  const [error, setError] = useState({
    name: null, email: null, phone: null, password: null }
  );
  function HandleInputChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
     setError({...error,[e.target.name]:false})
  }

  function HandleSubmit() {
    if (form.username === "") {
      setError((prevError) => ({
        ...prevError,
        username: true,
      }));
    } else if (form.email === "") {
      // setError((prevError) => ({
      //   ...prevError,
      //   email: true,
      // }));
    } else {
      // setError({
      //   email: false,
      //   username: false,
      // });
    }
  }
  
  return (
    <Box>
      <Box
        width={"30%"}
        m={"auto"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        height={"100VH"}
        gap={"10px"}
      >
        <FormLabel>
          User Name
          <Input
            border={ "0.5px solid #D3D3D3"}
            _focus={{ border: 'none', boxShadow: "none" }}
            onChange={HandleInputChange}
            _hover={{}}
            value={form.username}
            type="Text"
            name="username"
          />
          {/* {error&&<Box color={'red'}>Username is Required</Box>} */}

        </FormLabel>

        <FormLabel>
          Email address
          <Input
            border={  "0.5px solid #D3D3D3"}
            _focus={{ border: 'none', boxShadow: "none" }}
            _hover={{}}
            type="Text"
            name="email"
            onChange={HandleInputChange}
            value={form.email}
          />
          {/* {error&&<Box color={'red'}>Email is Required</Box>} */}
        </FormLabel>

        <FormLabel>
          Password
          <Input
            type="Password"
            name="password"
            onChange={HandleInputChange}
            value={form.password}
          />
        </FormLabel>

        <FormLabel>
          Confirm Password
          <Input
            type="Password"
            name="confirmPassword"
            onChange={HandleInputChange}
            value={form.confirmPassword}
          />
        </FormLabel>

        <Button
          width={"100%"}
          color={"white"}
          bg={"#301934"}
          _hover={{ background: "#A020F0" }}
          onClick={() => {
            HandleSubmit();
            console.log(form);
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
