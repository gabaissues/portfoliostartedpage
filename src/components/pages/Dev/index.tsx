import React from "react";

import * as G from './styles'

const DevComponent = () => {
  return(
    <G.Dev>
          <G.TextFixed right="2.5rem" top="2.5rem">
            Developer
          </G.TextFixed>

          <G.Content>
            <G.Text fontSize="2rem" fontWeight="600">
              Faço aplicativos, sites e muito mais!
              <svg
                width="30"
                height="27"
                viewBox="0 0 30 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 24V6H3V24H27ZM27 0C27.7957 0 28.5587 0.31607 29.1213 0.87868C29.6839 1.44129 30 2.20435 30 3V24C30 24.7957 29.6839 25.5587 29.1213 26.1213C28.5587 26.6839 27.7957 27 27 27H3C2.20435 27 1.44129 26.6839 0.87868 26.1213C0.31607 25.5587 0 24.7957 0 24V3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H27ZM16.5 21V18H24V21H16.5ZM11.37 15L5.355 9H9.6L14.55 13.95C15.135 14.535 15.135 15.495 14.55 16.08L9.63 21H5.385L11.37 15Z"
                  fill="#FFB4AD"
                />
              </svg>
            </G.Text>
            <G.Paragraph>
              Olá, me chamo Antônio Gabriel, vulgo Gaba. Consigo desenvolver
              sites de alta performace e acessivel a todo tipo de dispositivo.
              Trabalho com o intuito de resolver problemas e te auxiliar ao
              máximo possível em qualquer trabalho feito por mim. Faço sites,
              aplicativos, webscrapings, apis e bots!
            </G.Paragraph>

            <G.Link href="https://dev.gabaissues.com">
              Ir para o portfólio de Desenvolvedor
            </G.Link>
          </G.Content>
        </G.Dev>
  )
}

export default DevComponent