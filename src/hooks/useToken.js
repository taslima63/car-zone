import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    console.log(user, "usetoken user");
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            const url = `http://localhost:5000/user/${email}`;
            console.log(url);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token];
}

export default useToken;