import { CardBody, CardImg, CardTitle } from "reactstrap";
import styles from "./AboutUs.module.scss";

export function AboutUs(props) {
  const { about } = props;

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          Somos Sutipapelería la 15 ofrecemos una amplia variedad de productos
          para oficinas, estudiantes, profesionales y amantes del arte. Desde
          lápices y cuadernos hasta pinceles y lienzos, tenemos todo lo que
          necesitas para dar rienda suelta a tu creatividad. Además, contamos
          con un equipo amable y servicial para ayudarte a encontrar lo que
          necesitas. ¡Ven a visitarnos!
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          Nuestra misión es ser la papelería de referencia para aquellos que
          buscan productos de calidad para su trabajo, estudios o hobbies. Nos
          esforzamos por ofrecer una experiencia de compra cómoda y agradable,
          con un amplio surtido de productos y un equipo de expertos dispuesto a
          ayudar. Además, estamos comprometidos con la sostenibilidad, por lo
          que buscamos ofrecer opciones amigables con el medio ambiente en la
          medida de lo posible. Queremos ser el lugar donde encuentres todo lo
          que necesitas para dar rienda suelta a tu creatividad y llevar tus
          proyectos al siguiente nivel.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          Nuestra visión es convertirnos en la papelería más innovadora y
          reconocida a nivel local y nacional, destacando por nuestra amplia
          oferta de productos, calidad en el servicio al cliente y compromiso
          con la sostenibilidad. Buscamos ser el destino predilecto de aquellos
          que buscan productos de alta calidad y soluciones creativas para sus
          necesidades de trabajo, estudio y ocio. Además, nos esforzamos por
          seguir explorando nuevas formas de innovar y ofrecer productos únicos
          y exclusivos que inspiren y motiven a nuestros clientes a desarrollar
          su creatividad y alcanzar sus metas.
        </p>
      </div>

      <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(602) 8810892</li>
          <li>(+57) 3146173076</li>
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Calle 15 # 9 - 64 Centro de Cali</p>
      </div>
    </div>
  );
}
