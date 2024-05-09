import { useState } from 'react'
import Form from './Form'
import Success from './Success'
import NavBar from './NavBar';

export default function Register() {

    const [showSuccess, setShowSuccess] = useState(false)
    return (
        <main>
            <NavBar showSuccess={showSuccess} />
            {
                showSuccess ? <Success /> : <Form handleSuccess={setShowSuccess} />
            }
        </main>

    )
}


