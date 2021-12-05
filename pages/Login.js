import { useState } from 'react'
export default function LoginPage({login,user}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    console.log(user);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <div className="grid grid-rows-3 gap-4 bg-green-300 rounded-md">
                        <div className="m-4 flex-2">
                            <lable className="mr-3 font-semibold text-black-50" >username </lable>
                            <input type="text" name='username' className="w-4/5 form-control" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="m-4 flex-2">
                            <lable className="mr-3 font-semibold text-black-50"> password </lable>
                            <input type="password" className="w-4/5 form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="grid grid-rows-1 m-2">
                            <button onClick={() => login(username, password)} className="font-semibold bg-green-600 rounded-md form-control" >Login</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}