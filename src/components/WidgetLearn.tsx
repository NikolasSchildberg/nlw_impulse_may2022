import {ChatTeardropDots, LinuxLogo, Smiley, WindowsLogo, Skull} from 'phosphor-react';

export function Widget(){
    let size = 150;
    let myState = false;
    if (myState) {return (
        <div>
            <h1>Choose your system:</h1>
            <div className='flex'>
                <LinuxLogo size={size}/>
                <WindowsLogo size={size} />
            </div>
        </div>)
    }
    else {
        if (false){
            return (
                <div>
                    <Smiley size={size}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <Skull size={size} />
                </div>
            )
        }
    
    }
}