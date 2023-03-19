const CEP = document.getElementById('CEP');

const pesquisarCep=async(CEP)=>{
    
    const url = `https://viacep.com.br/ws/${CEP}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();

    console.log(endereco)

    document.getElementById('Logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;

    return endereco
    
}

document.getElementById('CEP').addEventListener('blur',()=>{pesquisarCep(CEP.value)});

