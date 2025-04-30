import { clientesMock } from '../mocks/clientesMock';
export default function GestionClientes() {
  return (
    <div>
      <h2>Gestión de Clientes</h2>
      <ul>
        {clientesMock.map(cliente => (
          <li key={cliente.id}>
            {cliente.nombre} - {cliente.identificacion}
          </li>
        ))}
      </ul>
    </div>
  );
}