import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw">R$700</td>
                    <td>Moradia</td>
                    <td>20/02/2022</td>
                </tr>
                <tr>
                    <td>Desenvolvimento de app</td>
                    <td className="deposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/07/2022</td>
                </tr>
                <tr>
                    <td>Criação de artes para Redes Sociais</td>
                    <td className="deposit">R$800</td>
                    <td>Design</td>
                    <td>20/02/2022</td>
                </tr>
                <tr>
                    <td>Luz</td>
                    <td className="withdraw">R$170</td>
                    <td>Energia</td>
                    <td>20/09/2022</td>
                </tr>
            </tbody>
        </table>
    </Container>
  );
}
