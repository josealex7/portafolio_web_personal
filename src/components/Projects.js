import { Button, Typography } from '@mui/material';
import React from 'react';
import '../styles/projects.css'

const Projects = () => {
    return (
        <div>
            <div>
                <div className='tituloProyectos'>
                <Typography variant='h3'>Mis proyectos recientes</Typography>
                <Typography variant='h5' sx={{mb:6  }}>Aquí hay algunos proyectos en los que 
                he trabajado recientemente.</Typography>
                </div>
                <div className='ContenedorProyectos'>
                    <div className='proyectoIndividual colorBlueFondo'>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643210185/Anotaci%C3%B3n_2022-01-26_101600_ucvwhu.png' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained'
                                    target="_blank" className='' href="https://as-5672a.web.app/"
                                    >
                                        Ver pagina web
                                    </Button>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" className='' href="https://github.com/josealex7/Amazonas"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='contenedorDescripcion'>
                            <Typography variant='h4'>Amazonas</Typography>
                            <Typography variant='body1' className='listadoFunciones'>Amazonas es una página web con un diseño
                            inspirado en Amazon, las funciones implementadas fueron: 
                            <ul >
                                <li>Registrarse y acceder con gmail o facebook</li>
                                <li>Ver el detalle de los productos, seleccionar las imagenes y ampliarlas</li>
                                <li>Si el usuario se autentica permite agregar, editar y eliminar productos</li>
                                <li>Cuenta con un carrito de compras y un formulario que simula un proceso de pago, entre otras.</li>
                            </ul>
                            Las tecnologias implementadas fueron:  
                                <label className='bold'>
                                     HTML, CSS, JavaScript, React JS, Material UI, Styled Componets, Redux, Firebase.
                                </label>
                            </Typography>
                        </div>
                    </div>
                    <div className='proyectoIndividual'>
                        <div className='contenedorDescripcion'>
                            <Typography variant='h4'>Block Master</Typography>
                            <Typography variant='body1' className='listadoFunciones'>Block Master es una página web
                            de peliculas, las funciones implementadas fueron: 
                            <ul >
                                <li>Registrarse y acceder con gmail o usuario</li>
                                <li>Listar y filtrar las peliculas con diferentes parametros</li>
                                <li>Permite agregar, editar y eliminar peliculas</li>
                                <li>Permite ver el detalle de las peliculas</li>
                            </ul>
                            Las tecnologias implementadas fueron:  
                                <label className='bold'>
                                     HTML, CSS, JavaScript, React JS, Material UI, Heroku.
                                </label>
                            </Typography>
                        </div>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643210711/Anotaci%C3%B3n_2022-01-26_102500_eove2h.png' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained'
                                    target="_blank" className='' href="https://block-master-404szq7uy-josealex7.vercel.app"
                                    >
                                        Ver pagina web
                                    </Button>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" className='' href="https://github.com/josealex7/Block_Master"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='proyectoIndividual colorBlueFondo'>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643217578/Anotaci%C3%B3n_2022-01-26_121921_dilvsc.png' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained'
                                    target="_blank" className='' href="https://josealex7.github.io/AdopcionMascotas/"
                                    >
                                        Ver pagina web
                                    </Button>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" className='' href="https://github.com/josealex7/AdopcionMascotas"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='contenedorDescripcion'>
                            <Typography variant='h4'>Adopción de Mascotas</Typography>
                            <Typography variant='body1' className='listadoFunciones'>La página de adopción de 
                            mascotas es una red social para conectar a los usuarios con las mascotas,
                            las funciones implementadas fueron: 
                            <ul >
                                <li>Listar perros o gatos</li>
                                <li>Ver el detalle y agregar a favoritos</li>
                                <li>Actualizar el perfil del usuario</li>
                                <li>Simulación de opción de chat</li>
                            </ul>
                            Las tecnologias implementadas fueron:  
                                <label className='bold'>
                                     HTML, CSS, JavaScript, Bootstrap, Json-Server, Heroku.
                                </label>
                            </Typography>
                        </div>
                    </div>
                    <Typography variant='h3' sx={{mt:5, mb:2}} className='contenedorTituloFinal'>Mas proyectos en los que he trabajado</Typography>
                    <Typography variant='h5' className='contenedorMensajeFinal'>
                            Si deseas ver mas de mis proyectos o el codigo de
                            ellos puedes hacer 
                            <a target="_blank" className='ir-A-GitHub' href="https://github.com/josealex7">
                                clic aquí
                            </a>

                    </Typography>
                    <div className='proyectoIndividual'>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643225837/Anotaci%C3%B3n_2022-01-26_143631_ulsd7l.png' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained'
                                    target="_blank" className='' href="https://pokedex-56837.web.app/"
                                    >
                                        Ver pagina web
                                    </Button>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" className='' href="https://github.com/josealex7/PokeDex"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643226133/Anotaci%C3%B3n_2022-01-26_144058_hpncf4.png' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained'
                                    target="_blank" className='' href="https://josealex7.github.io/Calculadora-de-IMC/"
                                    >
                                        Ver pagina web
                                    </Button>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" className='' href="https://github.com/josealex7/Calculadora-de-IMC"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
      );
};

export default Projects;
