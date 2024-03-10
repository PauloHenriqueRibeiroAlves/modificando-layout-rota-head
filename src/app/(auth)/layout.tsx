import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const layout = ({children}: Props) => {
  return(   
        
    <div>
      <h2>Área de autenticação</h2>
      <div>
        {children}
      </div>
    </div>
  );
}
export default layout;