import React from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

function faqs() {


    return (
        <>
            <NavigationBar />
            <section className="container-md" >
                <br /><br />

                <Card>
                    <Card.Header><h4>Administrar tu cuenta</h4></Card.Header>
                    <Card.Body>

                        <Accordion defaultActiveKey="0" className="text-left">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Acerca de las cuentas suspendidas</Accordion.Header>
                                <Accordion.Body>

                                    <p>
                                        Obtén más información sobre algunos de los motivos de la suspensión:
                                    </p>
                                    <p>
                                        <h6> Spam:</h6> La mayoría de las cuentas que suspendemos tienen características de
                                        spam o directamente son falsas, e implican riesgos para la seguridad de para la plataforma y de
                                        todos los usuarios de GeekBoxParty. Este tipo de cuentas va en contra de las Reglas de
                                        GeekBoxParty. A veces puede ocurrir que se suspenda por error la cuenta de una persona real,
                                        en cuyo caso trabajaremos con esa persona para asegurarnos de que se reactive su cuenta.
                                    </p>
                                    <p>
                                        <h6>Riesgos para la seguridad de la cuenta:</h6> Si sospechamos que una cuenta se hackeó o
                                        se vio comprometida, podemos suspenderla hasta que esté protegida y se la pueda restablecer
                                        a su titular, con el fin de disminuir la posibilidad de actividades maliciosas provocadas por
                                        el compromiso.
                                    </p>
                                    <p>
                                        <h6>Comportamientos abusivos:</h6> Podemos suspender una cuenta si se denunció que incumple
                                        las Reglas de GeekBoxParty relativas al abuso. Cuando una cuenta presenta comportamientos abusivos,
                                        como el envío de amenazas o la suplantación de identidad de otras cuentas, podemos suspenderla
                                        temporalmente o, en algunos casos, de forma permanente.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Ayuda con las cuentas bloqueadas o limitadas</Accordion.Header>
                                <Accordion.Body>
                                    <h5>Verifica tu cuenta por correo</h5>
                                    <p>
                                        <b>1.</b> Inicia sesión en tu cuenta. (Si no tienes acceso a la cuenta, comunícate con nuestro equipo de soporte).
                                    </p>
                                    <p>
                                        <b>2.</b> Busca el mensaje en el que se te informa: Tu cuenta ha sido bloqueada.
                                    </p>
                                    <p>
                                        <b>3.</b> Selecciona Iniciar.
                                    </p>
                                    <p>
                                        <b>4.</b> En la siguiente pantalla, selecciona Enviar correo para iniciar el proceso de verificación.
                                    </p>
                                    <p>
                                        <b>5.</b> Revisa tu bandeja de entrada de correo en busca de un correo de GeekBoxParty que contiene un código de verificación.
                                        El proceso de envío de dicho código a la bandeja de entrada de tu correo puede tardar unos minutos.
                                    </p>
                                    <p>
                                        <b>6.</b> Una vez que ingreses el código de verificación, selecciona Verificar para desbloquear la cuenta.
                                    </p>
                                    <p>
                                        Si no ves un correo electrónico nuestro en tu bandeja de entrada, consulta las carpetas de spam,
                                        correo no deseado y notificaciones de redes sociales.
                                    </p>
                                    <p>
                                        Si tu cuenta está en este estado, es posible que las personas que visiten tu perfil vean un mensaje donde se les
                                        informa que se registraron actividades inusuales en la cuenta y se les solicita que confirmen si desean visitarla de
                                        todas formas.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Funciones del chat</Accordion.Header>
                                <Accordion.Body>
                                    <h5>¿Cómo puedo impedir que me envíen mensajes?</h5>

                                    <p>Para dejar de recibir mensajes de un jugador</p>
                                    <p>
                                        <b>1.</b> Busca un botón con tres puntos verticales en el chat
                                    </p>
                                    <p>
                                        <b>2.</b> Haz clic en el boton
                                    </p>
                                    <p>
                                        <b>3.</b> Selecciona Denunciar
                                    </p>
                                    <p>
                                        <b>4.</b>   Confirma tu elección. La cuenta no podrá
                                        enviarte más mensajes.
                                    </p>
                                    <p>
                                        Como alternativa, para dejar de recibir mensajes, puedes bloquear la cuenta.
                                        Las cuentas bloqueadas no te pueden enviar mensajes, a menos que las desbloquees.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Cómo actualizar tus datos personales</Accordion.Header>
                                <Accordion.Body>
                                    <h5>Actualiza tu dirección de correo electrónico</h5><br></br>
                                    <p>
                                        <b>Paso 1</b><br></br>
                                        Inicia sesión en GeekBoxParty.es y ve a la página Configuración de la cuenta.
                                        Para ello, haz clic en el ícono <b>Más</b>  y, luego, en <b>Configuración y privacidad.</b>
                                    </p>
                                    <p>
                                        <b>Paso 2</b><br></br>
                                        Haz clic en <b>Tu cuenta.</b>
                                    </p>
                                    <p>
                                        <b>Paso 3</b><br></br>
                                        Haz clic en <b>Información de la cuenta</b> e ingresa tu contraseña.
                                    </p>
                                    <p>
                                        <b>Paso 4</b><br></br>
                                        Haz clic en <b>Correo electrónico.</b>
                                    </p>
                                    <p>
                                        <b>Paso 5</b><br></br>
                                        Escribe tu dirección de correo electrónico en el campo <b>Correo electrónico. </b>
                                        <b>Nota:</b> Solo se puede asociar una dirección de correo electrónico a una cuenta
                                        de GeekBoxParty a la vez.
                                    </p>
                                    <p>
                                        <b>Paso 6</b><br></br>
                                        Haz clic en el botón <b>Guardar</b> cambios que aparece al final de la página.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Card.Body>
                    <Card.Footer className="text-muted"><Button variant="primary">Ver todos los articulos</Button></Card.Footer>
                </Card>



                <br /><br /><br /><br />
                <Card className="text-left">
                    <Card.Header><h4>Reglas y políticas</h4></Card.Header>
                    <Card.Body>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Cómo hacemos cumplir nuestras reglas</Accordion.Header>
                                <Accordion.Body>

                                    <p>
                                        <b>1.</b> Definir las reglas de la página web: Antes de buscar hacer cumplir 
                                        las reglas de la página web, es importante definirlas claramente. Por ejemplo, 
                                        se pueden establecer reglas sobre el contenido que se permite publicar, el 
                                        comportamiento de los usuarios, la seguridad de la página, entre otros aspectos.
                                    </p>
                                    <p>
                                        <b>2.</b> Conocer al público objetivo: Es importante conocer al público objetivo 
                                        de la página web para poder adaptar las reglas y el contenido de acuerdo a sus 
                                        necesidades y preferencias. De esta manera, se puede fomentar la interacción y 
                                        la participación de los usuarios.
                                    </p>
                                    <p>
                                        <b>3.</b> Garantizar la seguridad de la página web: La seguridad es un aspecto 
                                        fundamental en cualquier página web. Para ello, se pueden utilizar herramientas 
                                        y servicios que permitan detectar y prevenir posibles amenazas y vulnerabilidades. 
                                        Por ejemplo, se puede utilizar una herramienta como "Seguridad del sitio web 
                                        impulsada con tecnología Sucuri" para analizar y monitorear el estado de los 
                                        archivos y documentos que se suben a la página.
                                    </p>
                                    <p>
                                        <b>4.</b> Cumplir con las leyes y regulaciones: Es importante cumplir con las leyes 
                                        y regulaciones que se aplican a la actividad en la red y al comercio electrónico. 
                                        Por ejemplo, en España, la Ley de Servicios de la Sociedad de la Información y 
                                        Comercio Electrónico (Ley 34/2002) establece algunas obligaciones y requisitos que 
                                        deben cumplir las páginas web que prestan algún servicio.
                                    </p>
                                    <p>
                                        <b>5.</b> Aplicar los principios del diseño: Los principios del diseño pueden ser muy 
                                        útiles para mejorar la apariencia y la funcionalidad de una página web. Por ejemplo, 
                                        se pueden utilizar principios como la jerarquía visual, la simplicidad, el equilibrio 
                                        y la armonía para crear una página web fácil de usar y atractiva para los usuarios.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Avisos en GeekBoxParty y su significado</Accordion.Header>
                                <Accordion.Body>
                                <p>
                                    A veces incluimos un aviso en una cuenta para brindarte más contexto sobre las 
                                    medidas que pueden tomar nuestros sistemas o equipos. En algunos casos, estas medidas responden 
                                    a comportamientos que incumplen las Reglas de GeekBoxParty. En otros, pueden responder a un 
                                    requerimiento válido y correctamente definido proveniente de una entidad autorizada en un país 
                                    determinado. 
                                </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Cómo se utilizan las cookies en GeekBoxParty</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                    Las cookies y otras tecnologías similares, como píxeles o almacenamiento local, te brindan una 
                                    experiencia mejor, más rápida y más segura en GeekBoxParty. Las cookies también se utilizan para 
                                    operar nuestros servicios, que incluyen nuestros sitios web, aplicaciones, APIs, píxeles, 
                                    integradores de contenido y notificaciones de correo electrónico. Concretamente, GeekBoxParty 
                                    utiliza estas tecnologías para:
                                    </p>

                                    <ul>

                                        <li>Ofrecer las características y funcionalidades de los servicios de GeekBoxParty.</li>
                                        <li>Guardar y respetar tus preferencias.</li>
                                        <li>Protegerte contra el spam y abusos.</li>
                                        <li>Proporcionar funciones de suscripción</li>
                                        <li>Comprender cómo interactúas con nuestros servicios y dónde podemos mejorar.</li>
                                        <li>Valorar el rendimiento de nuestros servicios e identificar errores y otros problemas de calidad.</li>
                                        <li>Recopilar los datos que se utilizan para el funcionamiento de nuestra actividad —desde la medición del tamaño de nuestra audiencia hasta la aplicación de las Reglas de GeekBoxParty.</li>


                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Política relativa a las colaboraciones de pago</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        La plataforma de juegos GeekBoxParty tiene una política de pagos y cobros que se describe en 
                                        detalle en el sitio web . En esta política se especifica que los bonos son fondos 
                                        acreditados por la plataforma a la cuenta del usuario y que pueden usarse para pagar 
                                        la recompensa por los derechos de usar el juego. Los bonos se concederán a discreción
                                        de GeekBoxParty, por ejemplo, al aportar los fondos a una cuenta dentro del servicio de GeekBoxParty 
                                        utilizando un método de pago específico y/o en el momento del debitar una cuenta de GeekBoxParty, 
                                        así como de otras formas previstas en el marco de las actividades de marketing promocionales 
                                        (incentivos).
                                    </p>
                                    <p>
                                        La Cuenta Premium es el derecho a usar el juego que le brinda capacidades adicionales dentro 
                                        del juego (por ejemplo, un nivel más alto). La Cuenta Premium se activará automáticamente cuando 
                                        el Usuario hace clic en el botón “Comprar” o en otro botón similar, cuando el Usuario ha hecho 
                                        el login en la Plataforma de GeekBoxParty.
                                    </p>
                                    <p>
                                        Es importante destacar que el Editor o GeekBoxParty son aceptadores de fondos y no proporcionan servicios 
                                        de pago: los pagos se realizan utilizando los métodos de pago especificados en el sitio web 
                                        GeekBoxParty.es. Todos los métodos de pago disponibles y la descripción de los métodos de transferir 
                                        los fondos se especifican en la plataforma de GeekBoxParty . Después de que el usuario ha realizado el 
                                        pago mediante cualquier método de pago dentro de los marcos de su cuenta de GeekBoxParty, podrá recibir 
                                        y usar las capacidades adicionales, la suscripción, la cuenta premium y otros derechos pagados 
                                        (si los hubiera) en el juego, disponibles a través de la plataforma de GeekBoxParty
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Card.Body>
                    <Card.Footer className="text-muted"><Button variant="primary">Ver todos los articulos</Button></Card.Footer>
                </Card>


                <br /><br /> <br /><br />

            </section>
            <Footer />
        </>
    );


}


export default faqs;