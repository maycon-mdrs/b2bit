import { Api } from '@/services/Api';

export async function login(email: string, password: string): Promise<any> {
    try {
        const response = await Api.post('/login/', {
            email,
            password,
        });
    
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getProfile() {
    try {
        const response = await Api.get('/profile/');
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
