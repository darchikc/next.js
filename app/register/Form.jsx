'use client'

export default function Form() {
async function submitHandler(e) {
    e.preventDefault()
    
    const formData = new FormData(e.target)

const resp = await fetch('/api/auth/register', {
  method: 'POST',
  body: JSON.stringify({
    email: formData.get('email'),
    password: formData.get('password')
  })
})
}

  return (
    
<form onSubmit={submitHandler} className="border p-5 flex flex-col w-1/2 mx-auto">
            <input name="email" className="border border-green-300 py-2 px-3 my-3" placeholder="Введите email" />
            <input type="password" name="password" className="border border-green-300 py-2 px-3 my-3" placeholder="Введите пароль" />
            <button className="py-2 px-4 bg-green-300 w-fit mx-auto rounded-md">Register</button>
        </form>


  )
}
