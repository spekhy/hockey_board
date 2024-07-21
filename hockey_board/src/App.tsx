
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
  return (
      <div className="rounded-md">
          <h4>Popup - GeeksforGeeks</h4>
          <Popup trigger = {<button> Click to open modal </button>} modal nested>
              {close => (<div className="rounded-md">
                          <div className="">Welcome to GFG!!!</div>
                          <div><button onClick = {() => close()}>Close modal</button></div>
                         </div>
                  )
              }
          </Popup>
      </div>
  )
};
