export default function Input({label, isTextarea, ...props}){
    return <p>
        <lable>{label}</lable>
        {isTextarea ? <texterea{...props} /> : <input {...props}/>}
    </p>
}