import React from 'react'
import { Footer, LogoPalmeiras } from './style'
import escudo from "../../Assets/escudo.png";
export default function FooterMain() {
  return (
    <Footer>
        <LogoPalmeiras src={escudo}/>
        Desenvolvido By: José Adauto
    </Footer>
  )
}
