import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as s from './style'


import React from 'react'

export default function Footer() {
  return (
    <s.Footer>

        <div className="center">
          <p> Desenvolvido por Guilherme Tavares</p>
          <div className="logos">
             <FaInstagram size={40}/>
             <FaGithub size={40}/>
             <FaLinkedin size={40}/>
          </div>
          <p><small>Única e exclusivamente para meios acadêmicos.</small></p>
        </div>
    </s.Footer>
  )
}
