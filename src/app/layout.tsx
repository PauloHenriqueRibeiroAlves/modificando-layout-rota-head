import { ReactNode } from 'react'
import './globals.css';
import { Metadata } from 'next';

type Props = {
  children: ReactNode
}
export const metadata: Metadata = {
  title: {
    template:'%s - TituloModificado',
    default: 'Título'
  }
}

const layout = ({children}: Props) => {
  return(
    <html>
      <body className="bg-black text-white">
        <h1 className="text-center">Layout principal modificado pelo Paulo</h1>
        <hr/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
export default layout;