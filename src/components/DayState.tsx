import Image from "next/image";

function DayState( { day } : { day: boolean | undefined } ){
    let url = "";

    if(day === false)      url = "/images/mark.svg";
    if(day === true)       url = "/images/check.svg";
    if(day === undefined)  url = "/images/x.svg";
    
    return <div className="flex items-center justify-center w-9 h-9">
        <Image src={url} width={12} height={12} alt="Green checkmark" />
    </div>
}

export default DayState;