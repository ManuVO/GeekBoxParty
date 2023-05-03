import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

function formulario() {
    return (
        <>
            <NavigationBar />
            <section className="container-md">
                <br />
                <br />
                <Card className="text-left">
                    <Card.Header>
                        <b>Guía para la comunidad</b>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            Para elaborar un juego en React, es necesario seguir los
                            siguientes pasos:
                        </p>

                        <Card.Title>Planificación del juego:</Card.Title>
                        <Card.Text>
                            Es importante tener una idea clara del juego que se va a
                            desarrollar. Se debe definir el objetivo del juego, las reglas, el
                            diseño y la jugabilidad. Esta planificación puede ser realizada en
                            papel o con herramientas de diseño como Figma o Sketch.            </Card.Text>

                        <Card.Title>Configuración del entorno de desarrollo:</Card.Title>
                        <Card.Text>
                            Para desarrollar en React, se necesita tener instalado Node.js y
                            un editor de código como Visual Studio Code. Luego, se debe crear
                            una nueva aplicación React utilizando el comando npx
                            create-react-app my-app. Esto creará una estructura de archivos y
                            directorios necesarios para el proyecto.            </Card.Text>

                        <Card.Title>Creación de componentes:</Card.Title>
                        <Card.Text>
                            Los componentes son la base de una aplicación React. Se deben
                            crear componentes para cada elemento de la interfaz de usuario,
                            incluyendo el tablero de juego, los elementos del juego y las
                            interacciones del usuario. Cada componente debe ser modular y
                            reutilizable.            </Card.Text>

                        <Card.Title>Implementación de la lógica del juego:</Card.Title>
                        <Card.Text>
                            La lógica del juego debe ser implementada utilizando JavaScript.
                            Se deben utilizar estados y props para manejar la información y
                            las interacciones del usuario. Se pueden utilizar librerías como
                            Redux o MobX para manejar el estado de la aplicación.            </Card.Text>

                        <Card.Title>Pruebas y depuración:</Card.Title>
                        <Card.Text>
                            Es importante realizar pruebas exhaustivas del juego para
                            asegurarse de que funcione correctamente en diferentes
                            situaciones. Se deben utilizar herramientas de depuración como
                            React Developer Tools para encontrar y solucionar errores.
                        </Card.Text>

                        <Card.Title>Publicación del juego:</Card.Title>
                        <Card.Text>
                            Una vez que el juego está completo, se debe publicar en la web. Se
                            pueden utilizar servicios como Netlify o GitHub Pages para alojar
                            la aplicación. También puedes envirnos directamente una carpeta
                            comprimida con todo el proyecto.
                        </Card.Text>
                        <br />
                        <br />
                        <Card.Title>Conclusión: </Card.Title>
                        <Card.Text>
                            En conclusión, para elaborar un juego en React se debe planificar
                            el juego, configurar el entorno de desarrollo, crear componentes,
                            implementar la lógica del juego, realizar pruebas y depuración, y
                            publicar el juego en la web. También se pueden utilizar librerías
                            populares como React Game Kit, Phaser o Three.js para crear juegos
                            en línea.            </Card.Text>

                        <Button variant="primary">Rellenar formulario</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">copyright ©</Card.Footer>
                </Card>
                <br />
                <br />
                <Form id="formulario">
                    <Form.Group>
                        <Form.Label>Introduzca su nombre :</Form.Label>
                        <Form.Control type="text" placeholder="Nombre completo" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo electrónico :</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Introduca su correo electrónico"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Introduzca nombre del juego :</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del juego" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripcion :</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Escriba una breve descripción del juego"
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Seleccione el archivo</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple"></Form.Group>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Deseo recibir notificaciones si el juego ha sido añadido con éxito a la plataforma"
                    />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
                <br />
                <br /> <br />
                <br />
            </section>
            <Footer />
        </>
    );
}

export default formulario;
