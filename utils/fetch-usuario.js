// Busca um usuário em uma API e disponibiliza os campos para o flow via `output`.
// No flow, use: ${output.nome}, ${output.email}, ${output.telefone}
//
// Obs: o motor JS do Maestro não é Node/browser, então `fetch` não existe.
// A chamada HTTP é feita com o objeto `http` embutido do Maestro.

const response = http.get('https://jsonplaceholder.typicode.com/users/1');
const usuario = JSON.parse(response.body);

output.nome = usuario.name;
output.email = usuario.email;
output.telefone = usuario.phone;
