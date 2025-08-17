
interface InputProps {
    placeholder: string
}

export default function({placeholder}: InputProps) {
    return (
        <div>
            <input className="w-full p-2 text-gray-500 border-2 rounded-2xl" type="text" placeholder={placeholder} />
        </div>
    )
}