import * as s from './style'
import { FaAws } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <s.Header>
      <s.Logos>
        <Link href={"AwsPage"}> <FaAws size={70} color='yellow'/></Link>
        
        <FaMicrosoft size={60}/>
        <FcGoogle size={50}/>
      </s.Logos> 
      <s.Message>
        <h2> Seu guia de estudo para o mundo das Certificações</h2>
      </s.Message>
    </s.Header>
  )
}

