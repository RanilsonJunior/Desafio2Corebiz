const form  = document. getElementById ('cadastro')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let salario = document.getElementById('salario').value;
    let vendas = document.getElementById('vendas').value;
    let salariodois = salario * 1
    let salariototal = vendas * 15 / 100 + salariodois
    let pessoa = {
        nome,
        salario,
        vendas,
        salariototal
    }

    let pronto = `
 
        
                <fieldset>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Salário Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>${nome}</td>
                                <td >${salariototal}</td>
                            </tr>
                        </tbody>
                    </table>
                    </fieldset>
 
    
       
    `


    setTimeout(() => {
        content.innerHTML = pronto
    }, )

})