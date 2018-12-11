

/**
 * DLM COMMU
 */
//% weight=100 color=#000011 icon="\uf185"
namespace COMMU {
  
    //% blockId="COMMU_INIT" block="INIT"
    //% weight=100 blockGap=8

    export function init(): void {
        serial.redirect(SerialPin.P0, SerialPin.P1, 115200)
    }

 
   
    //% blockId="COMMU_EXIT" block="EIXT"
    //% weight=90 blockGap=8
	export function exit(): void {
        serial.redirectToUSB()
    }


    //% blockId="COMMU_TRANSFER" block="TRANSFER"
    //% weight=80 blockGap=8
	export function transfer(): void {
        serial.writeString("motor")
    }

}  
