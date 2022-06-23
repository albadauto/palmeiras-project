import React, { useState } from 'react'
interface LoginModel{
    email: string,
    password: string
}
export default function Login() {
    const [loginData, userLoginData] = useState<LoginModel>();
  return (
    <div>Login</div>
  )
}
