
import  ReactDOM from "react-dom";

export default function ModalCreateItem( {children}) {
    


  return ReactDOM.createPortal(
   
    
        document.getElementById('modal')

    

    
  );
}
