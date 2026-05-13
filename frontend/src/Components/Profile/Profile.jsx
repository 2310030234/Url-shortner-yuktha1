/*import { Avatar,Stack,Container,Text } from '@mantine/core'
import React from 'react'

export default function Profile() {
   const dummy = {
       name: "U.Yuktha Siri",
       email: "2310030234@klh.edu.in",
       id: "2310030234",
   }
 return (<Container size={"md"}>
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    > <Avatar style={{width:"100px",height:"100px"}} variant="filled" color="red" radius="xl">YS</Avatar>
          <Text   radius="xl" color="blue">  {dummy.name}</Text>
          <Text > {dummy.email}</Text>
          <Text > Roll Number: {dummy.id}</Text>
          
          
           </Stack>
    </Container>
  

 )
}*/
import { Avatar, Container, Text, Stack } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Service from '../../utils/http'


export default function Profile() {
   const service = new Service()
   const [data , setData ] = useState(null)
   const getProfile = async ()=>{
       const response = await service.get("user/me");
       setData(response)
   }
   useEffect( ()=>{
       getProfile()
   } , [] )

   return (<Container size={"md"}  >
       <Stack


           h={300}
           bg="var(--mantine-color-body)"
           align="center"
           justify="center"
           gap="md"
       >
           <Avatar src={data?.avatar} size="xl" alt="it's me" />
           <Text  c='red' fw={700}> {data?.name}</Text>
           <Text> {data?._id}</Text>
           <Text> {data?.email}</Text>
       </Stack>


   </Container>)
}
// https://url-shortener-bootcamp.onrender.com/url/shortener
