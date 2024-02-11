import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { obtenerCantantes } from "../../services/Cantantes";

function Home2() {

  const [cantantes, setCantantes] = useState([]);

  useEffect(() => {
    const cantantes = obtenerCantantes();
    console.log(cantantes);
    setCantantes(cantantes);
  }, [])
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>CANTANTES</h1>
          </Col>
          <Col md={12}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Genero Musical</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              {
                cantantes.map((cantante) => {
                  <tr>
                    <td>{cantante.id}</td>
                    <td>{cantante.nombre}</td>
                    <td>{cantante.edad}</td>
                    <td>{cantante.genero_musical}</td>
                    <td></td>
                  </tr>
                })
              }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
