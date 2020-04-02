const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorSegundo();


import api from 'axios';

async function getUserFromGithub(user){
    try{
        const response = await api.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    }
    catch(error){
        console.warn(`Erro na API - ${error}`);
    }    
}

getUserFromGithub('FelipeStella');
getUserFromGithub('errado');


class Github {
    static async getRepositories(repo) {   

        try {
            const response = await api.get(`https://api.github.com/repos/${repo}`);

            console.log(response.data);
        }
        catch(error){
            console.log('Repositório inexistente');
        }
    } 
}

Github.getRepositories('FelipeStella/Curso_Starter_Rocktseat');
Github.getRepositories('rocketseat/dslkvmskv');


const buscaUsuario = async user => {
    try {
        const response = await api.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    }
    catch(error){
        console.warn('Usuário não existe!');
    } 
}

buscaUsuario('diego3g');