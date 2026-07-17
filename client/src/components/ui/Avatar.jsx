import { useState } from "react";

const AVATAR_COLORS = [
     "linear-gradient(135deg,#3B82F6,#2563EB)",
  "linear-gradient(135deg,#8B5CF6,#7C3AED)",
  "linear-gradient(135deg,#10B981,#059669)",
  "linear-gradient(135deg,#F59E0B,#D97706)",
  "linear-gradient(135deg,#EF4444,#DC2626)",
  "linear-gradient(135deg,#EC4899,#DB2777)",
]

const getAvatarColor = (name = '')=>{
    if(!name) return AVATAR_COLORS[0];
    return AVATAR_COLORS[name.charCodeAt(0)%AVATAR_COLORS.length];  
}

const getInitial = (name)=>{
    if(!name || typeof name !== 'string') return '?'
    return name.trim().charAt(0).toUpperCase();
}

const Avatar = ({src,name, size=32, className=''}) => {
    const [imgError, setImgError] = useState(false)

    if(src && !imgError){
        return (
            <img
            src={src}
            alt={name ||'Avatar'}
            onError={()=>setImgError(true)}
            className={`rounded-full object-cover shrink-0 ${className}`}
            style={
                {
                    width:size,
                    height:size,
                }
            }
            />
        )
    }
  return (
    <div
        className={`rounded-full flex items-center justify-center font-bold text-white shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: getAvatarColor(name),
        fontSize: Math.round(size * 0.42),
      }}>

      {getInitial(name)}
      
    </div>
  )
}

export default Avatar
