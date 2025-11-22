
import { useLocation, useParams } from 'react-router-dom';
import type { Producto } from '../services/ecommerce/productos.services';

export default function DetalleProducto() {
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state as Producto;

  return (
    <div className="container mt-4">
      <h2>Detalle del Producto</h2>
      <hr />
      <h3>{producto.nombre} {id}</h3>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px' }} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
    </div>
  );
}
